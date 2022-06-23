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


app.post('/restaurantes/:id/cardapio', (req, res) => {
  const { id } = req.params
  const { nome, preco } = req.body

  const restauranteSelecionado = restaurantes.find(restaurante => restaurante.id === Number(id))

  if (!restauranteSelecionado) {
    return res.status(401).json({
      erro: "Restaurante não encontrado"
    })
  }

  const novoPrato = {
    id: restauranteSelecionado.cardapio.length + 1,
    nome: nome,
    preco: preco
  }

  restauranteSelecionado.cardapio.push(novoPrato)

  res.status(201).json(novoPrato)
})

app.listen(3333, () => {
  console.log("API rodando na porta 3333")
})