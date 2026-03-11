import numpy as np
import matplotlib.pyplot as plt

# =========================
# 表示設定（Mac日本語対応）
# =========================
plt.rcParams["font.family"] = "Hiragino Sans"
plt.rcParams["axes.unicode_minus"] = False
plt.rcParams["font.size"] = 11
plt.rcParams["figure.dpi"] = 150
plt.rcParams["savefig.dpi"] = 300
plt.rcParams["axes.linewidth"] = 0.8
plt.rcParams["lines.linewidth"] = 1.2

# =========================
# パラメータ
# =========================
tone_dur_ms = 60
ramp_ms = 5
plateau_ms = tone_dur_ms - 2 * ramp_ms

# 時間軸
t = np.linspace(0, tone_dur_ms, 1000)

# 模式的なエンベロープ
env = np.piecewise(
    t,
    [t < ramp_ms,
     (t >= ramp_ms) & (t <= ramp_ms + plateau_ms),
     t > ramp_ms + plateau_ms],
    [
        lambda x: x / ramp_ms,  # 立ち上がり
        1.0,                    # 定常部
        lambda x: (tone_dur_ms - x) / ramp_ms  # 立ち下がり
    ]
)

env = np.clip(env, 0, 1)

# =========================
# 作図
# =========================
fig, ax = plt.subplots(figsize=(6.2, 3.0))

ax.plot(t, env, color="black")

# 軸ラベル
ax.set_xlabel("Time (ms)")
ax.set_ylabel("Amplitude")

# 軸範囲
ax.set_xlim(0, tone_dur_ms)
ax.set_ylim(-0.05, 1.08)

# 論文向けに上・右枠を消す
ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)

# 薄い補助線
ax.grid(False)

# 主要時点に縦の点線
ax.axvline(ramp_ms, color="black", linestyle=":", linewidth=0.8)
ax.axvline(ramp_ms + plateau_ms, color="black", linestyle=":", linewidth=0.8)

# 区間ラベル
y_annot = 1.04
ax.annotate("", xy=(0, y_annot), xytext=(ramp_ms, y_annot),
            arrowprops=dict(arrowstyle="<->", color="black", linewidth=0.8))
ax.text(ramp_ms / 2, y_annot + 0.01, "5", ha="center", va="bottom")

ax.annotate("", xy=(ramp_ms, y_annot), xytext=(ramp_ms + plateau_ms, y_annot),
            arrowprops=dict(arrowstyle="<->", color="black", linewidth=0.8))
ax.text(ramp_ms + plateau_ms / 2, y_annot + 0.01, "50", ha="center", va="bottom")

ax.annotate("", xy=(ramp_ms + plateau_ms, y_annot), xytext=(tone_dur_ms, y_annot),
            arrowprops=dict(arrowstyle="<->", color="black", linewidth=0.8))
ax.text(ramp_ms + plateau_ms + ramp_ms / 2, y_annot + 0.01, "5", ha="center", va="bottom")

# y目盛りを簡潔に
ax.set_yticks([0, 1])
ax.set_xticks([0, 5, 55, 60])

fig.tight_layout()
plt.show()

# 保存する場合
# fig.savefig("schematic_envelope.pdf", bbox_inches="tight")
# fig.savefig("schematic_envelope.png", bbox_inches="tight")