import express from "express";


const app = express();

app.get("/" , (req,res) => {
  return res.send({message: `Primeira roda get`})
})
app.post("/", (req,res) => {
  return res.json({message: `Primeira rota post`})
})

app.listen(3333, () => {
  console.log("Server is running")
})