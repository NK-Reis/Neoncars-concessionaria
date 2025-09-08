
// Atualiza o navbar conforme login
document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("loginLink");
  const registerLink = document.getElementById("registerLink");
  const logoutBtn = document.getElementById("logoutBtn");

  if(!loginLink || !registerLink || !logoutBtn) return;

  if (Auth.isLoggedIn()) {
    loginLink.style.display = "none";
    registerLink.style.display = "none";
    logoutBtn.style.display = "inline-block";
    logoutBtn.addEventListener("click", Auth.logout);
  } else {
    loginLink.style.display = "inline-block";
    registerLink.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }
});
