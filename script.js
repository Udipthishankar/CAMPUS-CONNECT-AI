const themeBtn = document.getElementById("themeBtn");
const scrollTopBtn = document.getElementById("scrollTopBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    document.documentElement.style.setProperty("--bg1", "#eef2ff");
    document.documentElement.style.setProperty("--bg2", "#dbeafe");
    document.documentElement.style.setProperty("--text", "#0f172a");
    document.documentElement.style.setProperty("--muted", "#334155");
    document.documentElement.style.setProperty("--card", "rgba(255,255,255,0.7)");
    document.documentElement.style.setProperty("--border", "rgba(255,255,255,0.75)");
    themeBtn.textContent = "Dark Mode";
  } else {
    document.documentElement.style.setProperty("--bg1", "#0f1020");
    document.documentElement.style.setProperty("--bg2", "#15162c");
    document.documentElement.style.setProperty("--text", "#f5f7ff");
    document.documentElement.style.setProperty("--muted", "#c8d0ff");
    document.documentElement.style.setProperty("--card", "rgba(255,255,255,0.12)");
    document.documentElement.style.setProperty("--border", "rgba(255, 255, 255, 0.18)");
    themeBtn.textContent = "Glow Mode";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const cards = document.querySelectorAll(".mini-card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("closeBtn");

cards.forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalText.textContent = card.dataset.info;
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
