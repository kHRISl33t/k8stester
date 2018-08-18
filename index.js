const express = require('express')
const app = express()

const port = process.env.PORT;

app.get('/', (req, res) => {
  console.log(`${new Date()} app.get => /`)
  res.send('/ - OK')
})

app.get('/test', (req, res) => {
  console.log(`${new Date()} app.get => /test`)
  res.send('/test - OK')
})

app.get('/health', (req, res) => {
  console.log(`${new Date()} app.get => /health`)
  res.send('/health - OK')
})

app.get('/healthz', (req, res) => {
  console.log(`${new Date()} app.get => /healthz`)
  res.send('/healthz - OK.')
})

app.listen(port, () => console.log(`Test app listening on ${port}`))