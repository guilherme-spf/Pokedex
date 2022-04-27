require("dotenv").config();
const express = require("express");
const path = require("path");
const { addAbortSignal } = require("stream");
const app = express();

const port = process.env.PORT || 3000

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    nome: "Absol",
    descricao:
      "Swift as the wind, Absol races through fields and mountains. Its curved, bow-like horn is acutely sensitive to the warning signs of natural disasters.",
    tipo: "Dark",
    categoria: "Disaster",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png",
  },
  {
    id: 2,
    nome: "Rayquaza",
    descricao:
      "Rayquaza is said to have lived for hundreds of millions of years. Legends remain of how it put to rest the clash between Kyogre and Groudon.",
    tipo: "Dragon",
    categoria: "Sky High",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png",
  },
  {
    id: 3,
    nome: "Lucario",
    descricao:
      "It controls waves known as auras, which are powerful enough to pulverize huge rocks. It uses these waves to take down its prey.",
    tipo: "Fighting",
    categoria: "Aura",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
  },
];

let pokemon = undefined;

app.get("/", (req, res) => {
  res.render("index", { pokedex, pokemon });
});

app.post("/add", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/");
});

app.get("/espec/:id", (req, res) => {
  const id = +req.params.id;
  pokemon = pokedex.filter(Boolean).find((pokemon) => pokemon.id === id);
  res.redirect("/");
});

app.post("/update/:id", (req, res) => {
  const id = +req.params.id - 1;
  const newPoke = req.body;
  newPoke.id = id + 1;
  pokedex[id] = newPoke;
  pokemon = undefined;
  res.redirect("/");
});

app.listen(port, () =>
  console.log("Servidor rodando em http://localhost:${port}")
);
