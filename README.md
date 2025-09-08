
# NeonCars — Concessionária (Projeto Didático)

Site de concessionária com vitrine pública de carros e **preços liberados apenas para usuários logados** (simulação no front-end).  
Próximas etapas: back-end **Node.js + SQLite (SQL)** para autenticação real e proteção do preço.

## Tecnologias
- HTML5, CSS3, JavaScript (Front-end)
- (Planejado) Node.js + Express + SQLite (SQL)
- Git e GitHub

## Estrutura
```
public/
  index.html       # Home
  register.html    # Cadastro
  login.html       # Login
  cars.html        # Listagem de carros (preço só p/ logado)
  contact.html     # Contato
  about.html       # Sobre o projeto
  css/style.css
  js/auth.js
  js/nav.js
  js/register.js
  js/login.js
  js/home.js
  js/cars.js
  img/
  data/cars.json
db/
  schema.sql       # Tabelas (futuro back-end)
```

## Como rodar localmente (sem servidor)
1. Abra a pasta `car-dealership/public` no VS Code.
2. Clique em `index.html` e use a extensão "Live Server" (ou abra o arquivo no navegador).
3. Cadastre-se em `register.html`, faça login em `login.html` e veja preços em `cars.html`.

> **Atenção**: Autenticação é apenas didática (LocalStorage). Em produção usaremos back-end + SQL.

## Próximos passos (sugestão)
1. Criar repositório Git e enviar para o GitHub.
2. Implementar back-end com Node.js + SQLite.
3. Mover regra de exibição de preços para o servidor (protegida de verdade).
