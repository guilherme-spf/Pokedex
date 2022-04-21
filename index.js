const express = require("express");
const path = require("path")
const app = express();

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

const pokedex = [
    {
       id: 359, 
       nome: "Absol",
       descricao: "Rápido como o vento, Absol corre através de campos e montanhas. Seu chifre curvo, parecido com arco, é extremamente sensível aos sinais de alerta de desastres naturais.",
       tipo: "Dark",
       categoria: "Desastre",
       imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png"
    },
    {
        id: 389, 
        nome: "Rayquaza",
        descricao: "Diz-se que Rayquaza viveu por centenas de milhões de anos. As lendas permanecem de como ele colocou para descansar o confronto entre Kyogre e Groudon.",
        tipo: "Dragon",
        categoria: "Céu Alto",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png"
     },
     {
        id: 448, 
        nome: "Lucario",
        descricao: "Controla ondas conhecidas como auras, que são poderosas o suficiente para pulverizar rochas enormes. Ele usa essas ondas para derrubar sua presa.",
        tipo: "Fighting",
        categoria: "Aura",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png"
     },
]

app.get("/", (req, res) => {
  res.render("index", {pokedex});
});

app.listen(3000, ( ) => console.log("Servidor rodando em http://localhost:3000"));