require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
      nombre: 'Juan',
      titulo: 'Curso de Node'
    })
  });

app.get('/elements', (req, res) => {
    res.render('elements',{
      nombre: 'Juan',
      titulo: 'Curso de Node'
    })
  });


  app.get('/generic', (req, res) => {
    res.render('generic',{
      nombre: 'Juan',
      titulo: 'Curso de Node'
    })
  });


app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html')
  })

app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`)
})