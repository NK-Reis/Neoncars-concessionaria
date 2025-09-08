
-- Futuro back-end com SQLite (Node.js)
CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  senha_hash TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS carros (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  marca TEXT NOT NULL,
  modelo TEXT NOT NULL,
  ano INTEGER NOT NULL,
  preco REAL NOT NULL,
  imagem TEXT
);

-- Exemplo de seed (opcional):
-- INSERT INTO carros (marca, modelo, ano, preco, imagem) VALUES ('Toyota','Corolla',2021,112900,'img/sedan.png');
