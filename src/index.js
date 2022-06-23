const express = require("express")

const app = express()
app.use(express.json())

const restaurantes = []

app.get('/', (req, res) => {
  res.send('IFood API')
})

app.post('/restaurantes', (req, res) => {
  const { nome, endereco } = req.body

  const novoRestaurante = {
    id: restaurantes.length + 1,
    nome: nome,
    endereco: endereco,
    cardapio: []
  }

  restaurantes.push(novoRestaurante)

  res.status(201).json(novoRestaurante)
})

app.get('/restaurantes', (req, res) => {
  res.send(restaurantes)
})

app.listen(3333, () => {
  console.log("API rodando na porta 3333")
})