const actions = {
  copy() {
    const email = document.body.dataset.email || "";
    if (!email) {
      alert("vietinvestt.vn@gmail.com\n");
      return;
    }
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Đã sao chép email: " + email);
      })
      .catch(() => {
        alert("Không thể sao chép. Email: " + email);
      });
  },
  scroll() {
    const section = document.querySelector("#links");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  },
  "toggle-audio"(event) {
    const audio = document.querySelector("#bgm");
    if (!audio) {
      return;
    }
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          if (event?.currentTarget) {
            event.currentTarget.textContent = "Tắt nhạc nền";
          }
        })
        .catch(() => {
          alert("Trình duyệt chặn tự phát nhạc. Hãy bấm lại để bật.");
        });
    } else {
      audio.pause();
      if (event?.currentTarget) {
        event.currentTarget.textContent = "Bật nhạc nền";
      }
    }
  },
};

const seasonThemes = {
  spring: {
    label: "Xuan",
    vars: {
      "--bg": "#15392f",
      "--bg-soft": "#1f5444",
      "--panel": "rgba(35, 88, 72, 0.82)",
      "--panel-2": "rgba(44, 106, 88, 0.78)",
      "--text": "#f4ffe8",
      "--muted": "#dbf3c2",
      "--gold": "#ffd267",
      "--gold-strong": "#f7bc3c",
      "--line": "rgba(245, 223, 140, 0.34)",
      "--shadow": "0 22px 40px rgba(7, 34, 27, 0.36)",
      "--bg-layer-1": "radial-gradient(circle at 12% 10%, rgba(255, 226, 132, 0.24) 0 8%, transparent 35%)",
      "--bg-layer-2": "radial-gradient(circle at 88% 0%, rgba(188, 242, 180, 0.2) 0 10%, transparent 38%)",
      "--bg-layer-3": "linear-gradient(145deg, #13342b 0%, #1d4a3d 45%, #2d6a58 100%)",
      "--orb-left": "radial-gradient(circle, rgba(255, 242, 185, 0.9) 0 30%, rgba(191, 244, 174, 0.5) 33%, transparent 74%)",
      "--orb-right": "radial-gradient(circle, rgba(244, 255, 194, 0.88) 0 28%, rgba(169, 236, 168, 0.5) 31%, transparent 74%)",
      "--hero-c1": "rgba(47, 114, 93, 0.92)",
      "--hero-c2": "rgba(34, 90, 73, 0.88)",
      "--hero-c3": "rgba(25, 63, 52, 0.92)",
      "--hero-pattern": "rgba(255, 225, 143, 0.08)",
      "--hero-border": "rgba(244, 231, 157, 0.4)",
      "--hero-orb-ring": "rgba(236, 229, 163, 0.28)",
      "--hero-orb-soft": "rgba(240, 233, 171, 0.2)",
      "--hero-orb-glow": "rgba(226, 255, 182, 0.18)",
      "--card-c1": "rgba(41, 99, 81, 0.84)",
      "--card-c2": "rgba(27, 73, 59, 0.9)",
      "--card-pattern": "rgba(246, 224, 141, 0.05)",
      "--chip-c1": "#f1ffc4",
      "--chip-c2": "#ffd978",
      "--chip-text": "#244d40",
      "--btn-primary-text": "#234b3e",
      "--btn-primary-shadow": "rgba(251, 201, 79, 0.28)",
    },
  },
  summer: {
    label: "Ha",
    vars: {
      "--bg": "#06304b",
      "--bg-soft": "#0d4a6f",
      "--panel": "rgba(13, 82, 116, 0.8)",
      "--panel-2": "rgba(8, 66, 98, 0.78)",
      "--text": "#ecf9ff",
      "--muted": "#cdefff",
      "--gold": "#ffd56e",
      "--gold-strong": "#ffbf40",
      "--line": "rgba(192, 231, 255, 0.3)",
      "--shadow": "0 22px 40px rgba(3, 23, 35, 0.44)",
      "--bg-layer-1": "radial-gradient(circle at 12% 10%, rgba(255, 236, 159, 0.24) 0 8%, transparent 35%)",
      "--bg-layer-2": "radial-gradient(circle at 88% 0%, rgba(148, 225, 255, 0.24) 0 10%, transparent 38%)",
      "--bg-layer-3": "linear-gradient(145deg, #072b43 0%, #0e4668 45%, #14608b 100%)",
      "--orb-left": "radial-gradient(circle, rgba(255, 242, 189, 0.86) 0 30%, rgba(148, 230, 255, 0.45) 33%, transparent 74%)",
      "--orb-right": "radial-gradient(circle, rgba(210, 248, 255, 0.84) 0 28%, rgba(113, 210, 255, 0.42) 31%, transparent 74%)",
      "--hero-c1": "rgba(12, 94, 132, 0.92)",
      "--hero-c2": "rgba(9, 74, 112, 0.9)",
      "--hero-c3": "rgba(7, 56, 90, 0.92)",
      "--hero-pattern": "rgba(255, 226, 142, 0.08)",
      "--hero-border": "rgba(178, 231, 255, 0.34)",
      "--hero-orb-ring": "rgba(185, 235, 255, 0.24)",
      "--hero-orb-soft": "rgba(173, 230, 255, 0.18)",
      "--hero-orb-glow": "rgba(165, 235, 255, 0.15)",
      "--card-c1": "rgba(13, 84, 118, 0.86)",
      "--card-c2": "rgba(7, 61, 91, 0.92)",
      "--card-pattern": "rgba(183, 229, 255, 0.06)",
      "--chip-c1": "#c6f2ff",
      "--chip-c2": "#ffe07b",
      "--chip-text": "#114e68",
      "--btn-primary-text": "#104964",
      "--btn-primary-shadow": "rgba(255, 204, 88, 0.3)",
    },
  },
  autumn: {
    label: "Thu",
    vars: {
      "--bg": "#4a2712",
      "--bg-soft": "#6a3618",
      "--panel": "rgba(101, 54, 22, 0.82)",
      "--panel-2": "rgba(124, 67, 28, 0.78)",
      "--text": "#fff4e4",
      "--muted": "#f8d8b2",
      "--gold": "#ffca68",
      "--gold-strong": "#f59f2d",
      "--line": "rgba(255, 204, 142, 0.32)",
      "--shadow": "0 22px 40px rgba(38, 17, 7, 0.42)",
      "--bg-layer-1": "radial-gradient(circle at 12% 10%, rgba(255, 211, 133, 0.28) 0 8%, transparent 35%)",
      "--bg-layer-2": "radial-gradient(circle at 88% 0%, rgba(255, 173, 106, 0.22) 0 10%, transparent 38%)",
      "--bg-layer-3": "linear-gradient(145deg, #3a1f10 0%, #5a2f16 45%, #78401d 100%)",
      "--orb-left": "radial-gradient(circle, rgba(255, 230, 178, 0.9) 0 30%, rgba(255, 170, 103, 0.45) 33%, transparent 74%)",
      "--orb-right": "radial-gradient(circle, rgba(255, 219, 168, 0.85) 0 28%, rgba(241, 147, 74, 0.4) 31%, transparent 74%)",
      "--hero-c1": "rgba(121, 67, 31, 0.92)",
      "--hero-c2": "rgba(94, 49, 23, 0.9)",
      "--hero-c3": "rgba(72, 38, 18, 0.92)",
      "--hero-pattern": "rgba(255, 203, 137, 0.08)",
      "--hero-border": "rgba(255, 210, 142, 0.36)",
      "--hero-orb-ring": "rgba(248, 206, 140, 0.24)",
      "--hero-orb-soft": "rgba(248, 201, 132, 0.18)",
      "--hero-orb-glow": "rgba(255, 196, 130, 0.15)",
      "--card-c1": "rgba(108, 57, 24, 0.86)",
      "--card-c2": "rgba(79, 41, 18, 0.92)",
      "--card-pattern": "rgba(255, 205, 140, 0.06)",
      "--chip-c1": "#ffe3b3",
      "--chip-c2": "#ffbf70",
      "--chip-text": "#653312",
      "--btn-primary-text": "#6a3514",
      "--btn-primary-shadow": "rgba(255, 174, 85, 0.3)",
    },
  },
  winter: {
    label: "Dong",
    vars: {
      "--bg": "#152238",
      "--bg-soft": "#253454",
      "--panel": "rgba(41, 59, 92, 0.82)",
      "--panel-2": "rgba(53, 75, 112, 0.78)",
      "--text": "#edf5ff",
      "--muted": "#d7e6ff",
      "--gold": "#9dd9ff",
      "--gold-strong": "#74c9ff",
      "--line": "rgba(173, 206, 255, 0.3)",
      "--shadow": "0 22px 40px rgba(9, 16, 31, 0.44)",
      "--bg-layer-1": "radial-gradient(circle at 12% 10%, rgba(173, 221, 255, 0.22) 0 8%, transparent 35%)",
      "--bg-layer-2": "radial-gradient(circle at 88% 0%, rgba(215, 233, 255, 0.2) 0 10%, transparent 38%)",
      "--bg-layer-3": "linear-gradient(145deg, #111c2f 0%, #1e2d49 45%, #2a3f65 100%)",
      "--orb-left": "radial-gradient(circle, rgba(219, 239, 255, 0.88) 0 30%, rgba(156, 200, 255, 0.4) 33%, transparent 74%)",
      "--orb-right": "radial-gradient(circle, rgba(236, 246, 255, 0.84) 0 28%, rgba(157, 196, 255, 0.38) 31%, transparent 74%)",
      "--hero-c1": "rgba(50, 75, 118, 0.92)",
      "--hero-c2": "rgba(39, 60, 99, 0.9)",
      "--hero-c3": "rgba(29, 45, 78, 0.92)",
      "--hero-pattern": "rgba(184, 216, 255, 0.08)",
      "--hero-border": "rgba(182, 213, 255, 0.34)",
      "--hero-orb-ring": "rgba(187, 217, 255, 0.24)",
      "--hero-orb-soft": "rgba(172, 207, 255, 0.18)",
      "--hero-orb-glow": "rgba(176, 211, 255, 0.14)",
      "--card-c1": "rgba(47, 68, 107, 0.86)",
      "--card-c2": "rgba(33, 49, 84, 0.92)",
      "--card-pattern": "rgba(185, 215, 255, 0.06)",
      "--chip-c1": "#d6ebff",
      "--chip-c2": "#9ad5ff",
      "--chip-text": "#1f3f66",
      "--btn-primary-text": "#1d3f62",
      "--btn-primary-shadow": "rgba(124, 198, 255, 0.28)",
    },
  },
};

function getSeasonByMonth(month) {
  if (month >= 2 && month <= 4) {
    return "spring";
  }
  if (month >= 5 && month <= 7) {
    return "summer";
  }
  if (month >= 8 && month <= 10) {
    return "autumn";
  }
  return "winter";
}

function applySeasonTheme() {
  const month = new Date().getMonth();
  const season = getSeasonByMonth(month);
  const theme = seasonThemes[season] || seasonThemes.spring;
  const root = document.documentElement;

  Object.entries(theme.vars).forEach(([name, value]) => {
    root.style.setProperty(name, value);
  });

  document.body.dataset.season = season;
  const badge = document.querySelector(".badge");
  if (badge) {
    badge.textContent = `Developer Hub · 2026 · ${theme.label}`;
  }
}

function setupParallax(reduceMotion, supportsFinePointer) {
  if (reduceMotion) {
    return;
  }

  const container = document.createElement("div");
  container.className = "parallax-bg";
  container.innerHTML = `
    <div class="parallax-layer layer-a"></div>
    <div class="parallax-layer layer-b"></div>
    <div class="parallax-layer layer-c"></div>
  `;

  document.body.prepend(container);

  const layers = Array.from(container.querySelectorAll(".parallax-layer"));
  const multipliers = [14, 24, 36];
  let rafId = null;
  const state = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    scrollY: window.scrollY,
  };

  const render = () => {
    const nx = (state.x / window.innerWidth - 0.5) * 2;
    const ny = (state.y / window.innerHeight - 0.5) * 2;
    const scrollShift = Math.min(state.scrollY * 0.06, 40);

    layers.forEach((layer, index) => {
      const depth = multipliers[index] || 12;
      const tx = -nx * depth;
      const ty = -ny * depth + scrollShift * (index + 1) * 0.08;
      layer.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
    });

    rafId = null;
  };

  const requestTick = () => {
    if (rafId !== null) {
      return;
    }
    rafId = window.requestAnimationFrame(render);
  };

  if (supportsFinePointer) {
    window.addEventListener(
      "pointermove",
      (event) => {
        state.x = event.clientX;
        state.y = event.clientY;
        requestTick();
      },
      { passive: true },
    );
  }

  window.addEventListener(
    "scroll",
    () => {
      state.scrollY = window.scrollY;
      requestTick();
    },
    { passive: true },
  );

  window.addEventListener(
    "resize",
    () => {
      state.x = window.innerWidth / 2;
      state.y = window.innerHeight / 2;
      requestTick();
    },
    { passive: true },
  );

  render();
}

document.querySelectorAll("[data-action]").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const action = btn.getAttribute("data-action");
    if (action && actions[action]) {
      actions[action](event);
    }
  });
});

const audio = document.querySelector("#bgm");
const audioToggle = document.querySelector('[data-action="toggle-audio"]');
if (audio) {
  audio
    .play()
    .then(() => {
      if (audioToggle) {
        audioToggle.textContent = "Tắt nhạc nền";
      }
    })
    .catch(() => {});
}

document.addEventListener(
  "click",
  (event) => {
    if (event.target.closest("[data-action]")) {
      return;
    }
    if (audio && audio.paused) {
      audio
        .play()
        .then(() => {
          if (audioToggle) {
            audioToggle.textContent = "Tắt nhạc nền";
          }
        })
        .catch(() => {});
    }
  },
  { once: true },
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

document.querySelectorAll(".card, .portfolio-item").forEach((item, index) => {
  item.classList.add("reveal-ready");
  item.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
  observer.observe(item);
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

applySeasonTheme();
setupParallax(reduceMotion, supportsFinePointer);

if (!reduceMotion && supportsFinePointer) {
  const tiltItems = document.querySelectorAll(".hero, .hero-card, .card, .portfolio-item");

  tiltItems.forEach((item) => {
    const maxTilt = item.classList.contains("hero") ? 8 : 10;

    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * maxTilt * 2;
      const rotateX = (0.5 - py) * maxTilt * 2;
      const depth = item.classList.contains("hero") ? 14 : 10;

      item.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(${depth}px)`;
      item.style.setProperty("--mx", `${(px * 100).toFixed(2)}%`);
      item.style.setProperty("--my", `${(py * 100).toFixed(2)}%`);
    });

    item.addEventListener("pointerleave", () => {
      item.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)";
      item.style.removeProperty("--mx");
      item.style.removeProperty("--my");
    });
  });
}
