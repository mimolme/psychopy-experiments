import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

# =========================================================
# Parameters: choose one condition
# =========================================================
BASE_FREQ = 500.0
DELTA_F_SEMITONES = 6
SOA_MS = 120

# Fixed parameters
TONE_DUR_MS = 60

# =========================================================
# Helper
# =========================================================
def semitone_to_freq(base_freq, semitone_diff):
    return base_freq * (2 ** (semitone_diff / 12.0))

# Derived values
freq_A = BASE_FREQ
freq_B = semitone_to_freq(BASE_FREQ, DELTA_F_SEMITONES)

tone_dur = TONE_DUR_MS / 1000.0
soa = SOA_MS / 1000.0

# onset times
t_A1 = 0.0
t_B  = soa
t_A2 = 2 * soa
t_S  = 3 * soa

# total duration
total_dur = 4 * soa

# =========================================================
# Figure
# =========================================================
fig, ax = plt.subplots(figsize=(10, 4))

# schematic y positions
y_A = 1.0
y_B = 2.5
box_h = 0.36

# ---------------------------------------------------------
# Draw A / B / A / silence
# ---------------------------------------------------------
ax.add_patch(Rectangle(
    (t_A1, y_A - box_h / 2), tone_dur, box_h,
    edgecolor='black', facecolor='white', linewidth=1.4
))
ax.add_patch(Rectangle(
    (t_B,  y_B - box_h / 2), tone_dur, box_h,
    edgecolor='black', facecolor='white', linewidth=1.4
))
ax.add_patch(Rectangle(
    (t_A2, y_A - box_h / 2), tone_dur, box_h,
    edgecolor='black', facecolor='white', linewidth=1.4
))
ax.add_patch(Rectangle(
    (t_S, y_A - box_h / 2), soa, box_h,
    edgecolor='black', facecolor='white', hatch='//', linewidth=1.4
))

# labels
ax.text(t_A1 + tone_dur / 2, y_A, "A tone", ha='center', va='center', fontsize=12)
ax.text(t_B  + tone_dur / 2, y_B, "B tone", ha='center', va='center', fontsize=12)
ax.text(t_A2 + tone_dur / 2, y_A, "A tone", ha='center', va='center', fontsize=12)
ax.text(t_S + soa / 2, y_A, "silence", ha='center', va='center', fontsize=11)

# =========================================================
# Key x-positions
# =========================================================
a_left = t_A1
b_left = t_B
delta_x = -0.012  # Δf arrow x-position

# =========================================================
# Δf
# =========================================================

upper_line_left = delta_x - 0.010
upper_line_right = b_left

lower_line_left = delta_x - 0.010
lower_line_right = a_left

# guide lines
ax.plot([upper_line_left, upper_line_right], [y_B, y_B],
        color='black', lw=1.0, linestyle='dotted')
ax.plot([lower_line_left, lower_line_right], [y_A, y_A],
        color='black', lw=1.0, linestyle='dotted')

# ▼ここを変更（下線中央）
delta_x = (lower_line_left + lower_line_right) / 2.0

# Δf arrow
ax.annotate(
    "",
    xy=(delta_x, y_B),
    xytext=(delta_x, y_A),
    arrowprops=dict(arrowstyle="<->", lw=1.3, color="black")
)

# Δf label
ax.text(
    delta_x - 0.008,
    (y_A + y_B) / 2,
    "Δf",
    ha='right',
    va='center',
    fontsize=13
)

# =========================================================
# SOA
# - first left vertical tick extends down to A left edge
# =========================================================
soa_y = 3.02
tick_top = 3.18
tick_bottom_default = 2.90

pairs = [(t_A1, t_B), (t_B, t_A2), (t_A2, t_S)]

for i, (x1, x2) in enumerate(pairs):
    # left tick
    if i == 0:
        # extend the first left tick downward to the A-tone left edge height
        left_tick_bottom = y_A
    else:
        left_tick_bottom = tick_bottom_default

    # right tick
    right_tick_bottom = tick_bottom_default

    ax.plot([x1, x1], [left_tick_bottom, tick_top],
        color='black', lw=1.0, linestyle='dotted')
    ax.plot([x2, x2], [right_tick_bottom, tick_top],
        color='black', lw=1.0, linestyle='dotted')

    # arrow
    ax.annotate(
        "",
        xy=(x2, soa_y),
        xytext=(x1, soa_y),
        arrowprops=dict(arrowstyle="<->", lw=1.1, color="black")
    )

# SOA label only once
ax.text(
    (t_A1 + t_B) / 2,
    soa_y + 0.10,
    "SOA",
    ha='center',
    va='bottom',
    fontsize=13
)

# =========================================================
# Condition note
# =========================================================
ax.text(
    total_dur,
    3.22,
    f"Δf = {DELTA_F_SEMITONES} st,  SOA = {SOA_MS} ms",
    ha='right',
    va='bottom',
    fontsize=11
)

# =========================================================
# Axis formatting
# =========================================================
ax.set_xlim(-0.04, total_dur + 0.03)
ax.set_ylim(0.35, 3.35)

ax.set_xlabel("Time", fontsize=14)
ax.set_ylabel("Frequency", fontsize=14)

ax.set_xticks([])
ax.set_yticks([])

for spine in ["top", "right"]:
    ax.spines[spine].set_visible(False)
ax.spines["left"].set_linewidth(1.4)
ax.spines["bottom"].set_linewidth(1.4)

plt.tight_layout()
plt.savefig("figure_streaming_schematic.pdf", bbox_inches="tight")
plt.savefig("figure_streaming_schematic.png", dpi=600, bbox_inches="tight")
plt.show()