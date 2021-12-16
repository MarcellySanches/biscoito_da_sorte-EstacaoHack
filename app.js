const express = require('express')
// const db = require('./dbConnection')

const sorte = require('./mockup')

const app = express()

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))

// Rotas
// ---------------------------------------------
app.get('/', (req, res) => {
  var geradorSorte = sorte[Math.floor(Math.random() * sorte.length)];

  res.render('index',{frase:`${geradorSorte}`})

});

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
  console.log('Pressione CTRL+C para encerrar')
});