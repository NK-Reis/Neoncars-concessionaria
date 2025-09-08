
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());

  const users = JSON.parse(localStorage.getItem("neoncars_users") || "[]");
  const user = users.find(u => u.email === data.email && u.password === data.password);
  if(!user){
    alert("Credenciais inválidas.");
    return;
  }

  Auth.login(user.email);
  window.location.href = "cars.html";
});
