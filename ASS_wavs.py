# -*- coding: utf-8 -*-
"""
ABA列 wav 自動生成スクリプト
- 9条件（3つの周波数差 × 3つのSOA）の wav を保存
- PsychoPy不要
- 出力先: wav_sequences/
"""

import os
import wave
import numpy as np

# =========================
# 元プログラムに合わせた設定
# =========================
BASE_FREQ = 500.0
FREQ_DIFF_SEMITONES = [2, 6, 10]
SOA_LIST = [0.09, 0.12, 0.18]
TONE_DUR = 0.060
RAMP_DUR = 0.005
VOLUME = 0.5
SAMPLE_RATE = 44100
N_TRIPLETS = 12

OUT_DIR = "wav_sequences"


# =========================
# 関数
# =========================
def semitone_to_freq(base_freq: float, semitone_diff: float) -> float:
    """セミトーン差を周波数に変換"""
    return base_freq * (2 ** (semitone_diff / 12.0))


def build_tone_wave(
    freq_hz: float,
    duration_s: float,
    ramp_s: float,
    sample_rate: int,
    amplitude: float = 0.5
) -> np.ndarray:
    """
    mono の正弦波を生成
    立ち上がり・立ち下がりに exact cosine ramp を付加
    戻り値: float32, 範囲は概ね -1.0 ～ 1.0
    """
    n_samples = int(round(duration_s * sample_rate))
    if n_samples < 2:
        raise ValueError("duration_s is too short.")

    t = np.arange(n_samples, dtype=np.float64) / sample_rate
    wave_data = np.sin(2.0 * np.pi * freq_hz * t)

    n_ramp = int(round(ramp_s * sample_rate))
    if n_ramp > 0:
        if 2 * n_ramp > n_samples:
            raise ValueError("Ramp too long for tone duration.")

        ramp = 0.5 * (1.0 - np.cos(np.pi * np.arange(n_ramp) / n_ramp))
        envelope = np.ones(n_samples, dtype=np.float64)
        envelope[:n_ramp] = ramp
        envelope[-n_ramp:] = ramp[::-1]
        wave_data *= envelope

    wave_data *= amplitude
    return wave_data.astype(np.float32)


def make_silence(duration_s: float, sample_rate: int) -> np.ndarray:
    """無音配列を作成"""
    n_samples = int(round(duration_s * sample_rate))
    return np.zeros(n_samples, dtype=np.float32)


def build_aba_sequence(
    freq_a: float,
    freq_b: float,
    soa: float,
    tone_dur: float,
    ramp_dur: float,
    sample_rate: int,
    amplitude: float,
    n_triplets: int
) -> np.ndarray:
    """
    1 trial 分の ABA_ 列を作成
    パターン: A - B - A - _
    各 onset slot の長さ = SOA
    """
    if tone_dur > soa:
        raise ValueError(f"TONE_DUR ({tone_dur}) must be <= SOA ({soa}).")

    tone_a = build_tone_wave(freq_a, tone_dur, ramp_dur, sample_rate, amplitude)
    tone_b = build_tone_wave(freq_b, tone_dur, ramp_dur, sample_rate, amplitude)

    silent_gap = max(0.0, soa - tone_dur)
    gap = make_silence(silent_gap, sample_rate)
    empty_slot = make_silence(soa, sample_rate)

    # 1 triplet = A / B / A / _
    one_triplet = np.concatenate([
        tone_a, gap,
        tone_b, gap,
        tone_a, gap,
        empty_slot
    ])

    full_sequence = np.concatenate([one_triplet for _ in range(n_triplets)])
    return full_sequence.astype(np.float32)


def save_wav_mono_16bit(path: str, wave_data: np.ndarray, sample_rate: int) -> None:
    """
    float32 (-1.0~1.0想定) を mono 16bit PCM wav として保存
    """
    clipped = np.clip(wave_data, -1.0, 1.0)
    int16_data = (clipped * 32767).astype(np.int16)

    with wave.open(path, "wb") as wf:
        wf.setnchannels(1)      # mono
        wf.setsampwidth(2)      # 16bit = 2 bytes
        wf.setframerate(sample_rate)
        wf.writeframes(int16_data.tobytes())


# =========================
# メイン処理
# =========================
def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)

    created_files = []

    for df in FREQ_DIFF_SEMITONES:
        freq_b = semitone_to_freq(BASE_FREQ, df)

        for soa in SOA_LIST:
            seq = build_aba_sequence(
                freq_a=BASE_FREQ,
                freq_b=freq_b,
                soa=soa,
                tone_dur=TONE_DUR,
                ramp_dur=RAMP_DUR,
                sample_rate=SAMPLE_RATE,
                amplitude=VOLUME,
                n_triplets=N_TRIPLETS
            )

            soa_ms = int(round(soa * 1000))
            filename = f"ABA_500Hz_vs_{df}st_SOA{soa_ms}ms.wav"
            path = os.path.join(OUT_DIR, filename)

            save_wav_mono_16bit(path, seq, SAMPLE_RATE)
            created_files.append((filename, len(seq) / SAMPLE_RATE, freq_b))

    print("保存完了")
    print(f"出力フォルダ: {OUT_DIR}")
    print(f"生成ファイル数: {len(created_files)}")
    print()

    for filename, duration_s, freq_b in created_files:
        print(f"{filename}")
        print(f"  B音周波数: {freq_b:.3f} Hz")
        print(f"  長さ: {duration_s:.3f} s")
        print()


if __name__ == "__main__":
    main()