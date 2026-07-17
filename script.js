const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
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
      document.documentElement.style.setProperty("--border", "rgba(255,255,255,0.18)");
      themeBtn.textContent = "Glow Mode";
    }
  });
}
