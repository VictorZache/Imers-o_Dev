import express from "express";

const app = express();
app.listen(3000, () => {
    console.log("Servido esta ouvindo.");
    
});

app.get("/api", (req, res) => {
    res.status(200).send("Bem Vindo!");
})