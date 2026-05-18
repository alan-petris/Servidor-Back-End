import express from "express";

const app = express();
const PORT = 3000;
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

const player = {
    name: "Arthur",
    classe: "Warrior",
    level: 10,
    power: 850,
};

const users = [
    { id: "1", name: "Antonio", age: 40 },
    { id: 2, name: "Carlita", age: 30 },
];

app.get("/projetos", (req, res) => res.send(player));
app.get("/usuarios", (req, res) => res.json(users));
app.get("/usuarios/:id", (req, res) => {
    const idUser = req.params.id;
    const usuario = users.filter((id) => id == idUser);
    res.json(usuario);
});
app.get("/players", (req, res) => res.json(player));
app.get("/", (req, res) => res.send("pagina inicial"));
app.post("/usuarios/:id", (req, res) => {
    res.json(req.params.id);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
// Heloo World
// Hello Sunday

// Hello Everything you want to change your life,
//console.log("Hahaha, Goku is amazing, dragon Ball")
