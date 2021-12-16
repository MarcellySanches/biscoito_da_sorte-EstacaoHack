const express = require('express')
// const db = require('./dbConnection')

// const sorte = require('./mockup')

const db = require ('./dbConnection')

const app = express()

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))

// Rotas
// ---------------------------------------------
app.get('/', async (req, res) => {
  // var geradorSorte = sorte[Math.floor(Math.random() * sorte.length)];
   var result = await db.query('SELECT texto FROM sortes ORDER BY RANDOM() LIMIT 1')

  
  

  res.render('index',{frase:result.rows})

});

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
  console.log('Pressione CTRL+C para encerrar')
});