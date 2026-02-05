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
          event.target.textContent = "Tắt nhạc nền";
        })
        .catch(() => {
          alert("Trình duyệt chặn tự phát nhạc. Hãy bấm lại để bật.");
        });
    } else {
      audio.pause();
      event.target.textContent = "Bật nhạc nền";
    }
  },
};

document.querySelectorAll("[data-action]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.getAttribute("data-action");
    if (action && actions[action]) {
      actions[action](event);
    }
  });
});

document.addEventListener(
  "click",
  (event) => {
    if (event.target.closest("[data-action]")) {
      return;
    }
    const audio = document.querySelector("#bgm");
    if (audio && audio.paused) {
      audio.play().catch(() => {});
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

document.querySelectorAll(".card, .portfolio-item").forEach((item) => {
  item.classList.add("reveal-ready");
  observer.observe(item);
});
