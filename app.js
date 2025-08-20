document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const messageEl = document.getElementById("message");

  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      messageEl.innerText = "⚠️ Username dan Password wajib diisi!";
      messageEl.style.color = "red";
      return;
    }

    // ✅ Login statis
    if (username === "lumbung" && password === "literasi") {
      messageEl.style.color = "green";
      messageEl.innerText = "✅ Login berhasil!";

      // Simpan session
      localStorage.setItem("isLoggedIn", "true");

      // Redirect ke dashboard
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 800);
    } else {
      messageEl.style.color = "red";
      messageEl.innerText = "❌ Username atau Password salah!";
    }
  });
});
