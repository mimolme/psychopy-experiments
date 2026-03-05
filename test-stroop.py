# -*- coding: utf-8 -*-
"""
PsychoPy Stroop Task (minimal)
- keys: r=red, g=green, b=blue, y=yellow
- save: stroop_data.csv
"""

from psychopy import visual, core, event, gui
import random
import csv
from datetime import datetime

# -----------------------
# Participant info
# -----------------------
info = {"participant": "p001"}
dlg = gui.DlgFromDict(info, title="Stroop Task")
if not dlg.OK:
    core.quit()

# -----------------------
# Experiment settings
# -----------------------
WIN_SIZE = (1000, 700)
TEXT_HEIGHT = 0.12
FIX_DUR = 0.5      # seconds
STIM_MAX = 2.0     # max response window
ITI = 0.5          # inter-trial interval

# Define colors (PsychoPy uses -1..1 RGB)
COLOR_MAP = {
    "red":   ([1, -1, -1], "r"),
    "green": ([-1, 1, -1], "g"),
    "blue":  ([-1, -1, 1], "b"),
    "yellow":([1, 1, -1], "y"),
}

WORDS = ["red", "green", "blue", "yellow"]

# Trials
N_CONGRUENT = 20
N_INCONGRUENT = 20

trials = []

# Congruent trials: word == ink color
for _ in range(N_CONGRUENT):
    w = random.choice(WORDS)
    ink = w
    trials.append({"condition": "congruent", "word": w, "ink": ink})

# Incongruent trials: word != ink color
for _ in range(N_INCONGRUENT):
    w = random.choice(WORDS)
    ink = random.choice([c for c in WORDS if c != w])
    trials.append({"condition": "incongruent", "word": w, "ink": ink})

random.shuffle(trials)

# -----------------------
# Prepare window & stimuli
# -----------------------
win = visual.Window(WIN_SIZE, color=[0, 0, 0], units="height")
fix = visual.TextStim(win, text="+", height=TEXT_HEIGHT, color=[1, 1, 1])
stim = visual.TextStim(win, text="", height=TEXT_HEIGHT, color=[1, 1, 1])

instructions = visual.TextStim(
    win,
    text=(
        "ストループ課題\n\n"
        "文字の意味ではなく、インクの色を答えてください。\n\n"
        "r = 赤\n"
        "g = 緑\n"
        "b = 青\n"
        "y = 黄\n\n"
        "スペースキーで開始します。"
    ),
    font="Hiragino Sans",
    height=0.045,
    color=[1, 1, 1],
    wrapWidth=1.2
)

# -----------------------
# Start screen
# -----------------------
instructions.draw()
win.flip()
event.waitKeys(keyList=["space", "escape"])
if "escape" in event.getKeys():
    win.close()
    core.quit()

# -----------------------
# Run trials
# -----------------------
results = []
global_clock = core.Clock()

for t_idx, t in enumerate(trials, start=1):
    # Fixation
    fix.draw()
    win.flip()
    core.wait(FIX_DUR)

    # Stimulus
    word = t["word"].upper()  # display uppercase
    ink_rgb, correct_key = COLOR_MAP[t["ink"]]
    stim.text = word
    stim.color = ink_rgb

    event.clearEvents()
    trial_clock = core.Clock()

    stim.draw()
    win.flip()

    keys = event.waitKeys(maxWait=STIM_MAX, keyList=["r", "g", "b", "y", "escape"], timeStamped=trial_clock)

    rt = None
    resp = None
    correct = 0

    if keys is None:
        # timeout
        resp = ""
        rt = STIM_MAX
        correct = 0
    else:
        resp, rt = keys[0]
        if resp == "escape":
            break
        correct = 1 if resp == correct_key else 0

    # Save trial result
    results.append({
        "participant": info["participant"],
        "trial": t_idx,
        "condition": t["condition"],
        "word": t["word"],
        "ink": t["ink"],
        "correct_key": correct_key,
        "response": resp,
        "rt_sec": rt,
        "correct": correct,
        "timestamp": datetime.now().isoformat(timespec="seconds")
    })

    # ITI
    win.flip()
    core.wait(ITI)

# -----------------------
# End message
# -----------------------
end_msg = visual.TextStim(win, text="Finished.\n\nThank you!\n\nPress any key to exit.", height=0.05, color=[1, 1, 1])
end_msg.draw()
win.flip()
event.waitKeys()

win.close()

# -----------------------
# Write CSV
# -----------------------
outname = f"stroop_data_{info['participant']}.csv"
with open(outname, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=list(results[0].keys()) if results else [])
    if results:
        writer.writeheader()
        writer.writerows(results)

core.quit()