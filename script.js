document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("themeBtn");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");

      const isLight = document.body.classList.contains("light-mode");

      document.documentElement.style.setProperty("--bg1", isLight ? "#eef2ff" : "#0f1020");
      document.documentElement.style.setProperty("--bg2", isLight ? "#dbeafe" : "#15162c");
      document.documentElement.style.setProperty("--text", isLight ? "#0f172a" : "#f5f7ff");
      document.documentElement.style.setProperty("--muted", isLight ? "#334155" : "#c8d0ff");
      document.documentElement.style.setProperty("--card", isLight ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.12)");
      document.documentElement.style.setProperty("--border", isLight ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.18)");

      themeBtn.textContent = isLight ? "Dark Mode" : "Glow Mode";
    });
  }

  window.shareInvite = async function (link, title) {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: `Join my session: ${title}`,
          url: link
        });
      } else {
        await navigator.clipboard.writeText(link);
        alert("Link copied to clipboard");
      }
    } catch (err) {
      try {
        await navigator.clipboard.writeText(link);
        alert("Link copied to clipboard");
      } catch (e) {
        alert("Copy failed. Link: " + link);
      }
    }
  };
});
