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
const postBtn = document.getElementById("postBtn");

if (postBtn) {
  postBtn.addEventListener("click", () => {
    const title = document.getElementById("postTitle").value.trim();
    const desc = document.getElementById("postDesc").value.trim();
    const tag = document.getElementById("postTag").value;

    if (!title || !desc) {
      alert("Please enter both title and description.");
      return;
    }

    const feedGrid = document.getElementById("feedGrid");
    const card = document.createElement("div");
    card.className = "feature-card";
    card.innerHTML = `
      <div class="icon">📝</div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <span class="feed-tag">${tag}</span>
    `;
    feedGrid.prepend(card);

    document.getElementById("postTitle").value = "";
    document.getElementById("postDesc").value = "";
    document.getElementById("postTag").value = "Opportunity";
    alert("Post added to community board.");
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const buddyBtn = document.getElementById("buddyBtn");
  const microBtn = document.getElementById("microBtn");
  const communityBtn = document.getElementById("communityBtn");

  if (buddyBtn) {
    buddyBtn.addEventListener("click", () => {
      window.location.href = "buddy.html";
    });
  }

  if (microBtn) {
    microBtn.addEventListener("click", () => {
      window.location.href = "micro.html";
    });
  }

  if (communityBtn) {
    communityBtn.addEventListener("click", () => {
      window.location.href = "community.html";
    });
  }
});
