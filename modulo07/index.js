
//Creamos constantes y requerimos las librerías
const express = require('express');
const path = require('path');
const hbs = require('hbs');

//Ejecutamos express y guardamos el puerto
const PORT = process.env.PORT || 8080; 
const app = express();

//Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Configuraciones
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//Rutas 
app.get('/', (req, res) => {
    res.render('index');
});



app.get('/productos', (req, res) => {
    res.render('productos');
});

app.get('/formulario', (req, res) => {
    res.render('formulario', {
        titulo: 'Formulario para la carga de Productos' 
    });
});

app.get('/sucursales', (req, res) => {
    res.render('sucursales');
});

app.post('/formulario', (req, res) => {

    const { nombre, password } = req.body;

   // console.log(`Tus datos han sido recibidos, ${nombre} - ${password}`);

    res.render('enviado')
})


//Aplicación en escucha por el puerto asignado
app.listen(PORT, () => {
   // console.log(`Aplicación activa y trabajando en el Puerto ${PORT}`);
});

//En caso de error, me avisa
app.on('Error', (err) => {
   // console.log(`Tenemos un error en el Espacio`);
})
