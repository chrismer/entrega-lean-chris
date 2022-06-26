const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// app.use('/api/productos',productos);
// app.use('/api/carrito',carrito);

//--------------------------------------------
// inicio el servidor
const PORT = process.env.PORT || 8080;

const servidor = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${servidor.address().port}`)
})
servidor.on('error', error => console.log(`Error en servidor ${error}`))