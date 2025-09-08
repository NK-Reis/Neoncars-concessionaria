
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());

  // Simples validação
  if(!data.name || !data.email || !data.password || data.password.length < 6){
    alert("Preencha nome, e-mail e senha (mínimo 6 caracteres).");
    return;
  }

  // Salva usuário no localStorage (apenas didático)
  const users = JSON.parse(localStorage.getItem("neoncars_users") || "[]");
  const exists = users.some(u => u.email === data.email);
  if(exists){
    alert("E-mail já cadastrado.");
    return;
  }
  users.push({name: data.name, email: data.email, password: data.password});
  localStorage.setItem("neoncars_users", JSON.stringify(users));

  alert("Cadastro realizado! Faça login para ver os preços.");
  window.location.href = "login.html";
});
