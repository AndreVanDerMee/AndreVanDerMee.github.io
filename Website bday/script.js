// ---------------------------------------------------------------------------
// Birthday present calendar
// Each present unlocks on its date. Tap an unlocked present to reveal the gift
// and its hint image.
// ---------------------------------------------------------------------------

// Set the year here. Dates are local time, unlocking at 00:00 on the day.
const YEAR = 2026;

const PRESENTS = [
  {
    day: "Wednesday",
    date: new Date(YEAR, 5, 10, 0, 0, 0), // June 10
    dateLabel: "June 10",
    gift: "Diesel Hoodie",
    hint: "images/hint-wednesday.jpg",
  },
  {
    day: "Thursday",
    date: new Date(YEAR, 5, 11, 0, 0, 0), // June 11
    dateLabel: "June 11",
    gift: "Raffaello",
    hint: "images/hint-thursday.jpg",
  },
  {
    day: "Friday",
    date: new Date(YEAR, 5, 12, 0, 0, 0), // June 12
    dateLabel: "June 12",
    gift: "1x DPA",
    hint: "images/hint-friday.jpg",
  },
  {
    day: "Saturday",
    date: new Date(YEAR, 5, 13, 0, 0, 0), // June 13
    dateLabel: "June 13",
    gift: "Disneyland Paris",
    hint: "images/hint-saturday.jpg",
  },
  {
    day: "Sunday",
    date: new Date(YEAR, 5, 14, 0, 0, 0), // June 14
    dateLabel: "June 14",
    gift: "Nice Lunch",
    hint: "images/hint-sunday.jpg",
  },
];

const OPENED_KEY = "bday-opened-v1";

function loadOpened() {
  try {
    return JSON.parse(localStorage.getItem(OPENED_KEY)) || {};
  } catch {
    return {};
  }
}

function saveOpened(opened) {
  try {
    localStorage.setItem(OPENED_KEY, JSON.stringify(opened));
  } catch {
    /* ignore */
  }
}

let opened = loadOpened();

// --- Optional testing override ---------------------------------------------
// Add ?day=3 to the URL to preview as if "today" were the 3rd present's date.
function getNow() {
  const params = new URLSearchParams(location.search);
  const forced = params.get("day");
  if (forced !== null) {
    const idx = Math.max(1, Math.min(PRESENTS.length, parseInt(forced, 10))) - 1;
    return new Date(PRESENTS[idx].date.getTime() + 1000);
  }
  return new Date();
}

function isUnlocked(present, now) {
  return now.getTime() >= present.date.getTime();
}

// --- Render presents --------------------------------------------------------
const grid = document.getElementById("grid");

function render() {
  const now = getNow();
  grid.innerHTML = "";

  PRESENTS.forEach((present, i) => {
    const unlocked = isUnlocked(present, now);
    const isOpened = !!opened[i];

    const btn = document.createElement("button");
    btn.className = "present " + (!unlocked ? "locked" : isOpened ? "opened" : "available");
    btn.setAttribute("data-index", i);

    let statusText;
    if (!unlocked) statusText = "Locked";
    else if (isOpened) statusText = "Tap to view";
    else statusText = "Tap to open";

    btn.innerHTML = `
      ${!unlocked ? '<span class="lock-badge" aria-hidden="true">&#128274;</span>' : ""}
      <div>
        <div class="day">${present.day}</div>
        <div class="date">${present.dateLabel}</div>
      </div>
      <div class="box-icon" aria-hidden="true">
        <span class="lid"></span>
        <span class="base"></span>
        <span class="ribbon"></span>
        <span class="knot"></span>
      </div>
      <div class="status">${statusText}</div>
    `;

    btn.addEventListener("click", () => onPresentTap(i, unlocked));
    grid.appendChild(btn);
  });
}

function onPresentTap(i, unlocked) {
  if (!unlocked) {
    nudgeLocked(i);
    return;
  }
  const wasOpened = !!opened[i];
  opened[i] = true;
  saveOpened(opened);
  render();
  if (!wasOpened) launchConfetti();
  openReveal(i);
}

function nudgeLocked(i) {
  const el = grid.querySelector(`[data-index="${i}"]`);
  if (!el) return;
  el.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-6px)" },
      { transform: "translateX(6px)" },
      { transform: "translateX(0)" },
    ],
    { duration: 280, easing: "ease-in-out" }
  );
}

// --- Reveal overlay ---------------------------------------------------------
const overlay = document.getElementById("overlay");
const revealDay = document.getElementById("revealDay");
const revealGift = document.getElementById("revealGift");
const hintImage = document.getElementById("hintImage");
const closeBtn = document.getElementById("closeBtn");

function openReveal(i) {
  const present = PRESENTS[i];
  revealDay.textContent = present.day + " \u00b7 " + present.dateLabel;
  revealGift.textContent = present.gift;

  hintImage.innerHTML = "";
  const img = new Image();
  img.alt = "Hint for " + present.gift;
  img.onload = () => {
    hintImage.innerHTML = "";
    hintImage.appendChild(img);
  };
  img.onerror = () => {
    hintImage.innerHTML =
      '<div class="placeholder">Add your hint image here:<br><strong>' +
      present.hint +
      "</strong></div>";
  };
  img.src = present.hint;

  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
}

function closeReveal() {
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
}

closeBtn.addEventListener("click", closeReveal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeReveal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeReveal();
});

// --- Countdown --------------------------------------------------------------
const cdLabel = document.getElementById("countdownLabel");
const cdDays = document.getElementById("cdDays");
const cdHours = document.getElementById("cdHours");
const cdMins = document.getElementById("cdMins");
const cdSecs = document.getElementById("cdSecs");
const countdownEl = document.getElementById("countdown");

function nextLockedPresent(now) {
  return PRESENTS.find((p) => p.date.getTime() > now.getTime());
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function updateCountdown() {
  const now = getNow();
  const next = nextLockedPresent(now);

  if (!next) {
    cdLabel.textContent = "All presents are unlocked";
    countdownEl.classList.add("done");
    return;
  }

  countdownEl.classList.remove("done");
  cdLabel.textContent = "Next present (" + next.day + ") unlocks in";

  let diff = Math.max(0, next.date.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000);
  diff -= hours * 3600000;
  const mins = Math.floor(diff / 60000);
  diff -= mins * 60000;
  const secs = Math.floor(diff / 1000);

  cdDays.textContent = days;
  cdHours.textContent = pad(hours);
  cdMins.textContent = pad(mins);
  cdSecs.textContent = pad(secs);
}

// Re-render the grid when a present crosses into "unlocked".
let lastUnlockedCount = -1;
function checkUnlockChange() {
  const now = getNow();
  const count = PRESENTS.filter((p) => isUnlocked(p, now)).length;
  if (count !== lastUnlockedCount) {
    lastUnlockedCount = count;
    render();
  }
}

// --- Confetti ---------------------------------------------------------------
function launchConfetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = document.createElement("div");
  layer.className = "confetti";
  const colors = ["#f97316", "#fb923c", "#6db3e6", "#1f6fb2", "#fed7aa"];
  for (let i = 0; i < 60; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "vw";
    s.style.background = colors[Math.floor(Math.random() * colors.length)];
    s.style.animationDuration = 2.2 + Math.random() * 1.8 + "s";
    s.style.animationDelay = Math.random() * 0.4 + "s";
    s.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(s);
  }
  document.body.appendChild(layer);
  setTimeout(() => layer.remove(), 4200);
}

// --- Init -------------------------------------------------------------------
render();
updateCountdown();
setInterval(() => {
  updateCountdown();
  checkUnlockChange();
}, 1000);
