const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('app.get => /')
  res.send('Hello from /')
})

app.get('/test', (req, res) => {
  console.log('app.get => /test')
  res.send('Hello from /test')
})

app.listen(port, () => console.log(`Test app listening on ${port}`))