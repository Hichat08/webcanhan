const actions = {
  copy() {
    const email = document.body.dataset.email || "";
    if (!email) {
      alert("vietinvestt.vn@gmail.com");
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
};

document.querySelectorAll("[data-action]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.getAttribute("data-action");
    if (action && actions[action]) {
      actions[action]();
    }
  });
});

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
