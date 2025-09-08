
async function loadHighlights(){
  const res = await fetch("data/cars.json");
  const cars = (await res.json()).slice(0,3);
  const wrap = document.getElementById("homeHighlights");
  cars.forEach(c => {
    const card = document.createElement("div");
    card.className = "card car-card";
    card.innerHTML = `
      <img src="${c.image}" alt="${c.brand} ${c.model}" />
      <div class="car-title">
        <strong>${c.brand} ${c.model}</strong>
        <span class="badge">${c.year}</span>
      </div>
      <p class="muted">${c.desc || ""}</p>
      <p class="price">${Auth.isLoggedIn() ? "R$ " + Number(c.price).toLocaleString("pt-BR") : "Cadastre-se para ver o preço"}</p>
    `;
    wrap.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", loadHighlights);
