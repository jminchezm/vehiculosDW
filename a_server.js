const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Utilización de hbs para el renderizado de la página web
app.set('view engine', 'hbs');

//Uso de parciales "codigo que se repite en mas de un lugar o paginas web"
hbs.registerPartials(__dirname + '/views/partials');

//Middelware para la carpeta public
app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/electricos', (req, res) => {
    res.render('electricos');
})

app.get('/gasolina', (req, res) => {
    res.render('gasolina');
})

app.get('/diesel', (req, res) => {
    res.render('diesel');
})


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Ejemplo app escuchando a htpp://localhost:${port}`);
})