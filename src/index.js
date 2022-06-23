const express = require("express")

const app = express()

app.get('/', (req, res) => {
  res.send('IFood API')
})

app.listen(3333, () => {
  console.log("API rodando na porta 3333")
})