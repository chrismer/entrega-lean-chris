const express = require("express");
const router = express.Router();
const { Carrito } = require("../contenedor/classCarrito");
const controladorCarrito = new Carrito();

router.get("/", (req, res) => {
    const carrito = controladorCarrito.obtenerTodosLosCarritos();
    res.status(200).json(carrito);
});

router.post("/", (req, res) => {
    const carrito = controladorCarrito.nuevo(req.body);
    res
      .status(200)
      .json(`Se creó el carrito con el id: ${JSON.stringify(carrito)}`);
});

router.delete("/:id", (req, res) => {
    const carrito = controladorCarrito.borrarPorId(req.params.id);
    res
      .status(200)
      .json(
        carrito === undefined
          ? `Se eliminó el carrito con id ${req.params.id}`
          : JSON.stringify(carrito)
      );
});

router.post("/:id/productos", (req, res) => {
    let idCarrito = parseInt(req.params.id);
    let Producto = { ...req.body };
    controladorCarrito.agregarProducto(idCarrito, Producto)
      ? res
          .status(200)
          .json({
            status: `Producto con id ${Producto.id} ha sido agregado al carrito con id ${idCarrito}`,
          })
      : res.status(406).json({ Error: `Carrito o Producto inexistente` });
});

router.delete("/:id/productos/:id_prod", (req, res) => {
    let idCarrito = parseInt(req.params.id);
    let idProducto = parseInt(req.params.id_prod);
    controladorCarrito.sacarProductoDeUnCarrito(idCarrito, idProducto)
      ? res
          .status(200)
          .json({
            status: `Producto con id ${idProducto} se a quitado del carrito con id ${idCarrito}`,
          })
      : res.status(406).json({ Error: `Carrito o Producto inexistente` });
});

module.exports = router  