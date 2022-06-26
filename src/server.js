const express = require('express');
const productos = require("./router/productos")
const carrito = require("./router/carrito")
// const mdwRoute = require("./middlewares/mdw_url");
// const mdwAdmin = require("./middlewares/mdw_admin");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(mdwAdmin.isAdmin);
app.use('/api/productos', productos);
app.use('/api/carrito',carrito);
// app.use(mdwRoute.ruta_invalida);
//--------------------------------------------
// inicio el servidor


const servidor = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${servidor.address().port}`)
})
servidor.on('error', error => console.log(`Error en servidor ${error}`))