# -*- coding: utf-8 -*-
"""
Auditory Stream Segregation (research-oriented PsychoPy Coder version)

Independent variables:
- Frequency difference (semitones)
- Presentation rate (SOA)

Dependent variables:
- Separation rate (response = segregated)
- Reaction time

Research-oriented points in this version:
- fixed tone duration (independent of SOA)
- exact 5 ms cosine ramp generated in waveform
- pre-generated tones for each condition
- practice trials
- block structure and break screens
- jittered ITI
- trial-level and summary CSV output

Notes:
- Playback level is still relative amplitude, not calibrated dB SPL.
- For real data collection, calibrate with the actual playback chain.
- Please verify timing/audio behavior on the actual experiment machine.
"""

from psychopy import prefs
prefs.hardware['audioLib'] = ['PTB', 'sounddevice', 'pyo', 'pygame']

from psychopy import sound, visual, core, event, gui
import random
import csv
import os
from datetime import datetime
from collections import defaultdict
import numpy as np


# =========================
# Participant info
# =========================
info = {
    "participant": "p001",
    "session": "001"
}
dlg = gui.DlgFromDict(info, title="Auditory Stream Segregation")
if not dlg.OK:
    core.quit()


# =========================
# Experiment settings
# =========================
# ---- stimulus ----
BASE_FREQ = 500.0                          # A tone frequency in Hz
FREQ_DIFF_SEMITONES = [2, 4, 6, 8, 10, 12]          # IV1: frequency difference
SOA_LIST = [0.09, 0.12, 0.18]             # IV2: onset-to-onset interval (s)
TONE_DUR = 0.060                          # fixed tone duration in s (60 ms)
RAMP_DUR = 0.005                          # fixed rise/fall ramp in s (5 ms)
VOLUME = 0.5                              # relative amplitude only (not dB SPL)
SAMPLE_RATE = 44100
N_TRIPLETS = 12                           # number of ABA_ triplets per trial

# ---- design ----
N_REPS_PER_CONDITION = 10                  # main trials per condition
N_PRACTICE_TRIALS = 6                     # short practice before main session
BLOCK_SIZE = 18                           # 72 main trials -> 4 blocks
RANDOM_SEED = None                        # set integer for reproducibility if needed

# ---- timing ----
FIX_DUR = 0.7
ITI_RANGE = (0.6, 1.0)                    # jittered ITI (s)
MAX_RESP_TIME = 5.0
POST_BLOCK_PAUSE = 0.3

# ---- display ----
FULLSCREEN = False
WINDOW_SIZE = (1000, 700)
BG_COLOR = "black"
TEXT_COLOR = "white"
FONT_NAME = "Hiragino Sans"

# ---- response ----
RESPONSE_KEYS = ["1", "2", "escape"]
START_KEYS = ["space", "escape"]
CONTINUE_KEYS = ["space", "escape"]


# =========================
# Safety checks
# =========================
if TONE_DUR <= (2 * RAMP_DUR):
    raise ValueError("TONE_DUR must be greater than 2 * RAMP_DUR.")

for soa in SOA_LIST:
    if TONE_DUR > soa:
        raise ValueError(
            f"TONE_DUR ({TONE_DUR:.3f}s) must be <= each SOA. Problematic SOA: {soa:.3f}s"
        )


# =========================
# Display settings
# =========================
win = visual.Window(
    size=WINDOW_SIZE,
    color=BG_COLOR,
    units="height",
    fullscr=FULLSCREEN
)

instr_text = visual.TextStim(
    win,
    text=(
        "これから単純な音が連続して聞こえます。\n"
        "音が再生された後、画面が切り替わります。\n"
        "聞こえ方を以下のいずれかで判断してください。\n\n"
        "1 = 一体化して聞こえた（1つの音列として聞こえた）\n"
        "2 = 分離して聞こえた（複数の音列として聞こえた）\n\n"
        "できるだけ直感的に、素早く 1 または 2 を押してください。\n\n"
        "まずは練習を行います。\n"
        "スペースキーで開始してください"
    ),
    font=FONT_NAME,
    color=TEXT_COLOR,
    height=0.045,
    wrapWidth=1.2
)

practice_text = visual.TextStim(
    win,
    text=(
        "練習を始めます。\n\n"
        "1 = 一体化\n"
        "2 = 分離\n\n"
        "スペースキーで開始してください"
    ),
    font=FONT_NAME,
    color=TEXT_COLOR,
    height=0.05,
    wrapWidth=1.2
)

main_text = visual.TextStim(
    win,
    text=(
        "練習は終了です。\n\n"
        "続いて本試行に移ります。\n\n"
        "スペースキーで開始してください"
    ),
    font=FONT_NAME,
    color=TEXT_COLOR,
    height=0.05,
    wrapWidth=1.2
)

fixation = visual.TextStim(
    win,
    text="+",
    font=FONT_NAME,
    color=TEXT_COLOR,
    height=0.08
)

prompt = visual.TextStim(
    win,
    text=(
        "どのように聞こえましたか？\n\n"
        "1 = 一体化\n"
        "2 = 分離\n\n"
        "1 または 2 を押してください"
    ),
    font=FONT_NAME,
    color=TEXT_COLOR,
    height=0.05,
    wrapWidth=1.2
)

thanks = visual.TextStim(
    win,
    text="終了です。ご協力ありがとうございました。",
    font=FONT_NAME,
    color=TEXT_COLOR,
    height=0.05
)

trial_counter_text = visual.TextStim(
    win,
    text="",
    pos=(0, 0.42),
    font=FONT_NAME,
    color=TEXT_COLOR,
    height=0.03
)

block_text = visual.TextStim(
    win,
    text="",
    pos=(0, 0.34),
    font=FONT_NAME,
    color=TEXT_COLOR,
    height=0.03
)

break_text = visual.TextStim(
    win,
    text="",
    font=FONT_NAME,
    color=TEXT_COLOR,
    height=0.05,
    wrapWidth=1.2
)


# =========================
# Utility functions
# =========================
def semitone_to_freq(base_freq, semitone_diff):
    """Convert semitone difference to frequency."""
    return base_freq * (2 ** (semitone_diff / 12.0))


def build_tone_wave(freq_hz, duration_s, ramp_s, sample_rate, amplitude=0.5):
    """Create a mono sine wave with an exact cosine rise/fall ramp."""
    n_samples = int(round(duration_s * sample_rate))
    if n_samples < 2:
        raise ValueError("duration_s is too short.")

    t = np.arange(n_samples, dtype=np.float64) / sample_rate
    wave = np.sin(2.0 * np.pi * freq_hz * t)

    n_ramp = int(round(ramp_s * sample_rate))
    if n_ramp > 0:
        if 2 * n_ramp > n_samples:
            raise ValueError("Ramp too long for tone duration.")

        ramp = 0.5 * (1.0 - np.cos(np.pi * np.arange(n_ramp) / n_ramp))
        envelope = np.ones(n_samples, dtype=np.float64)
        envelope[:n_ramp] = ramp
        envelope[-n_ramp:] = ramp[::-1]
        wave *= envelope

    wave *= amplitude
    return wave.astype(np.float32)


def make_tone(freq_hz, duration_s, volume=0.5):
    """Create a pure tone using an explicit waveform (fixed 5 ms cosine ramps)."""
    wave = build_tone_wave(
        freq_hz=freq_hz,
        duration_s=duration_s,
        ramp_s=RAMP_DUR,
        sample_rate=SAMPLE_RATE,
        amplitude=volume
    )
    return sound.Sound(
        value=wave,
        sampleRate=SAMPLE_RATE,
        stereo=False
    )


def build_conditions(freq_diffs, soa_list, n_reps, max_repeat=2):
    """Create factorial condition list with repetition constraint."""

    # 全条件を作る
    conds = []
    for df in freq_diffs:
        for soa in soa_list:
            for rep in range(n_reps):
                conds.append({
                    "freq_diff_semitones": df,
                    "soa": soa,
                    "rep": rep + 1
                })

    # 制約付きシャッフル
    while True:
        random.shuffle(conds)

        ok = True
        repeat_count = 1

        for i in range(1, len(conds)):

            prev = (conds[i-1]["freq_diff_semitones"], conds[i-1]["soa"])
            curr = (conds[i]["freq_diff_semitones"], conds[i]["soa"])

            if prev == curr:
                repeat_count += 1
                if repeat_count > max_repeat:
                    ok = False
                    break
            else:
                repeat_count = 1

        if ok:
            break

    return conds


def chunk_list(seq, chunk_size):
    """Split list into successive chunks."""
    return [seq[i:i + chunk_size] for i in range(0, len(seq), chunk_size)]


def show_message_and_wait(text_stim, wait_keys=None):
    text_stim.draw()
    win.flip()
    if wait_keys is None:
        keys = event.waitKeys()
    else:
        keys = event.waitKeys(keyList=wait_keys)
    if keys and "escape" in keys:
        win.close()
        core.quit()
    return keys


def mean(values):
    if len(values) == 0:
        return ""
    return sum(values) / len(values)


def preload_tones(freq_diffs, soa_list):
    """Pre-generate all tones used in the experiment for more stable playback."""
    tone_bank = {}
    for df in freq_diffs:
        for soa in soa_list:
            freq_A = BASE_FREQ
            freq_B = semitone_to_freq(BASE_FREQ, df)
            tone_bank[(df, soa)] = {
                "freq_A": freq_A,
                "freq_B": freq_B,
                "tone_dur": TONE_DUR,
                "tone_A": make_tone(freq_A, TONE_DUR, volume=VOLUME),
                "tone_B": make_tone(freq_B, TONE_DUR, volume=VOLUME)
            }
    return tone_bank


def play_ABA_sequence_from_bank(tone_A, tone_B, soa, tone_dur, n_triplets):
    """
    Play ABA_ sequence.
    One onset slot = SOA.
    Tone duration = tone_dur (fixed).
    Pattern per triplet: A  B  A  _
    """
    silent_gap = max(0.0, soa - tone_dur)

    for _ in range(n_triplets):
        tone_A.play()
        core.wait(tone_dur)
        core.wait(silent_gap)

        tone_B.play()
        core.wait(tone_dur)
        core.wait(silent_gap)

        tone_A.play()
        core.wait(tone_dur)
        core.wait(silent_gap)

        core.wait(soa)


def run_trials(trial_list, phase_label, start_trial_number, total_trial_count, tone_bank,
               block_index=0, n_blocks=1):
    """Run a list of trials and return result rows."""
    results = []

    for local_i, cond in enumerate(trial_list, start=1):
        global_i = start_trial_number + local_i - 1

        if event.getKeys(["escape"]):
            break

        df = cond["freq_diff_semitones"]
        soa = cond["soa"]
        bank = tone_bank[(df, soa)]
        freq_A = bank["freq_A"]
        freq_B = bank["freq_B"]
        tone_dur = bank["tone_dur"]
        tone_A = bank["tone_A"]
        tone_B = bank["tone_B"]
        presentation_rate_hz = 1.0 / soa

        trial_counter_text.text = f"Trial {global_i} / {total_trial_count}"
        if phase_label == "practice":
            block_text.text = "Practice"
        else:
            block_text.text = f"Block {block_index} / {n_blocks}"

        fixation.draw()
        trial_counter_text.draw()
        block_text.draw()
        win.flip()
        core.wait(FIX_DUR)

        event.clearEvents()

        stim_onset_global = global_clock.getTime()
        play_ABA_sequence_from_bank(
            tone_A=tone_A,
            tone_B=tone_B,
            soa=soa,
            tone_dur=tone_dur,
            n_triplets=N_TRIPLETS
        )
        stim_offset_global = global_clock.getTime()

        event.clearEvents()
        prompt.draw()
        trial_counter_text.draw()
        block_text.draw()
        win.flip()

        rt_clock = core.Clock()
        keys = event.waitKeys(
            maxWait=MAX_RESP_TIME,
            keyList=RESPONSE_KEYS,
            timeStamped=rt_clock
        )

        response_key = ""
        response = ""
        rt = ""
        valid_response = 0

        if keys is None:
            response = "no_response"
        else:
            key, resp_time = keys[0]
            if key == "escape":
                break
            response_key = key
            response = "integrated" if key == "1" else "segregated"
            rt = resp_time
            valid_response = 1

        separated = 1 if response == "segregated" else 0 if response == "integrated" else ""

        results.append({
            "participant": info["participant"],
            "session": info["session"],
            "phase": phase_label,
            "block": block_index,
            "trial": global_i,
            "trial_in_phase": local_i,
            "rep": cond["rep"],
            "freq_A_hz": round(freq_A, 3),
            "freq_B_hz": round(freq_B, 3),
            "freq_diff_semitones": df,
            "soa_s": soa,
            "presentation_rate_hz": round(presentation_rate_hz, 3),
            "tone_duration_s": round(tone_dur, 3),
            "ramp_s": RAMP_DUR,
            "n_triplets": N_TRIPLETS,
            "stim_onset_global_s": round(stim_onset_global, 4),
            "stim_offset_global_s": round(stim_offset_global, 4),
            "response_key": response_key,
            "response": response,
            "valid_response": valid_response,
            "separated_binary": separated,
            "rt_s": rt,
            "iti_s": ""
        })

        iti = random.uniform(ITI_RANGE[0], ITI_RANGE[1])
        results[-1]["iti_s"] = round(iti, 3)
        win.flip()
        core.wait(iti)

    return results


# =========================
# Random seed
# =========================
if RANDOM_SEED is not None:
    random.seed(RANDOM_SEED)


# =========================
# Prepare trials and tone bank
# =========================
main_trials = build_conditions(FREQ_DIFF_SEMITONES, SOA_LIST, N_REPS_PER_CONDITION)
practice_pool = build_conditions(FREQ_DIFF_SEMITONES, SOA_LIST, 1)
practice_trials = practice_pool[:N_PRACTICE_TRIALS]
main_blocks = chunk_list(main_trials, BLOCK_SIZE)

n_main_trials = len(main_trials)
n_practice_trials = len(practice_trials)
total_trial_count = n_practice_trials + n_main_trials

tone_bank = preload_tones(FREQ_DIFF_SEMITONES, SOA_LIST)


# =========================
# File setup
# =========================
timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
out_dir = "data"
os.makedirs(out_dir, exist_ok=True)

trial_file = os.path.join(
    out_dir,
    f"streaming_trials_{info['participant']}_{info['session']}_{timestamp}.csv"
)
summary_file = os.path.join(
    out_dir,
    f"streaming_summary_{info['participant']}_{info['session']}_{timestamp}.csv"
)


# =========================
# Start experiment
# =========================
show_message_and_wait(instr_text, wait_keys=START_KEYS)
show_message_and_wait(practice_text, wait_keys=CONTINUE_KEYS)

global_clock = core.Clock()
trial_results = []

# ---- practice ----
practice_results = run_trials(
    trial_list=practice_trials,
    phase_label="practice",
    start_trial_number=1,
    total_trial_count=total_trial_count,
    tone_bank=tone_bank,
    block_index=0,
    n_blocks=1
)
trial_results.extend(practice_results)

show_message_and_wait(main_text, wait_keys=CONTINUE_KEYS)

# ---- main blocks ----
completed_main = 0
for block_idx, block_trials in enumerate(main_blocks, start=1):
    block_results = run_trials(
        trial_list=block_trials,
        phase_label="main",
        start_trial_number=n_practice_trials + completed_main + 1,
        total_trial_count=total_trial_count,
        tone_bank=tone_bank,
        block_index=block_idx,
        n_blocks=len(main_blocks)
    )
    trial_results.extend(block_results)
    completed_main += len(block_results)

    if block_idx < len(main_blocks):
        break_text.text = (
            f"休憩です。\n\n"
            f"{block_idx} / {len(main_blocks)} ブロックが終了しました。\n\n"
            "準備ができたらスペースキーを押してください。"
        )
        show_message_and_wait(break_text, wait_keys=CONTINUE_KEYS)
        core.wait(POST_BLOCK_PAUSE)


# =========================
# Save trial-level data
# =========================
fieldnames = [
    "participant",
    "session",
    "phase",
    "block",
    "trial",
    "trial_in_phase",
    "rep",
    "freq_A_hz",
    "freq_B_hz",
    "freq_diff_semitones",
    "soa_s",
    "presentation_rate_hz",
    "tone_duration_s",
    "ramp_s",
    "n_triplets",
    "stim_onset_global_s",
    "stim_offset_global_s",
    "response_key",
    "response",
    "valid_response",
    "separated_binary",
    "rt_s",
    "iti_s"
]

with open(trial_file, "w", newline="", encoding="utf-8-sig") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(trial_results)


# =========================
# Create summary data (main trials only)
# =========================
summary_dict = defaultdict(lambda: {
    "n_valid_trials": 0,
    "n_segregated": 0,
    "rt_list": []
})

for row in trial_results:
    if row["phase"] != "main":
        continue
    key = (row["freq_diff_semitones"], row["soa_s"])
    if row["response"] in ["integrated", "segregated"]:
        summary_dict[key]["n_valid_trials"] += 1
        summary_dict[key]["n_segregated"] += int(row["separated_binary"])
        if row["rt_s"] != "":
            summary_dict[key]["rt_list"].append(float(row["rt_s"]))

summary_rows = []
for (freq_diff, soa), vals in sorted(summary_dict.items()):
    n_valid = vals["n_valid_trials"]
    separation_rate = vals["n_segregated"] / n_valid if n_valid > 0 else ""
    mean_rt = mean(vals["rt_list"])

    summary_rows.append({
        "participant": info["participant"],
        "session": info["session"],
        "phase": "main",
        "freq_diff_semitones": freq_diff,
        "soa_s": soa,
        "presentation_rate_hz": round(1.0 / soa, 3),
        "n_valid_trials": n_valid,
        "n_segregated": vals["n_segregated"],
        "separation_rate": separation_rate,
        "mean_rt_s": mean_rt
    })

summary_fieldnames = [
    "participant",
    "session",
    "phase",
    "freq_diff_semitones",
    "soa_s",
    "presentation_rate_hz",
    "n_valid_trials",
    "n_segregated",
    "separation_rate",
    "mean_rt_s"
]

with open(summary_file, "w", newline="", encoding="utf-8-sig") as f:
    writer = csv.DictWriter(f, fieldnames=summary_fieldnames)
    writer.writeheader()
    writer.writerows(summary_rows)


# =========================
# End
# =========================
thanks.draw()
win.flip()
core.wait(2.0)

win.close()
core.quit()
