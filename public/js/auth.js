
// Simples simulação de autenticação usando localStorage (didático)
// Em etapas futuras, trocaremos por backend + SQL com sessões/JWT.

const Auth = {
  isLoggedIn(){
    return localStorage.getItem("neoncars_logged") === "true";
  },
  login(email){
    localStorage.setItem("neoncars_logged","true");
    localStorage.setItem("neoncars_user", email || "");
  },
  logout(){
    localStorage.removeItem("neoncars_logged");
    localStorage.removeItem("neoncars_user");
    window.location.href = "index.html";
  }
};
