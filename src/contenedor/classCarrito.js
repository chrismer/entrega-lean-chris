const {Productos} = require("./classProductos")
const controladorProductos = new Productos();
let listaDeCarritos = []

class Carrito {
    static id = 1

    obtenerTodosLosCarritos(){
        if(listaDeCarritos.length >= 1){
            return listaDeCarritos
        }else{
            return []
        }
    }
    nuevo() {
        listaDeCarritos.push({ id: Carrito.id, productos: [] });
        Carrito.id++;
        return Carrito.id - 1;
    }
    borrarPorId(id) {
        const resultado = listaDeCarritos.find((idBuscado) => idBuscado.id === parseInt(id));
        let index = listaDeCarritos.indexOf(resultado);
        if (index == -1) {
          return { error: "Carrito no encontrado" };
        } else {
          listaDeCarritos.splice(index, 1);
        }
    }
    agregarProducto(idCarrito, producto) {
        if (controladorProductos.existeElId(producto.id)) {
          let index = listaDeCarritos.findIndex((element) => element.id == idCarrito);
          if (index == -1) {
            return false;
          } else {
            listaDeCarritos[index].productos.push(producto);
            return true;
          }      
        } else { return false }
    }

    sacarProductoDeUnCarrito(idCarrito, idProducto) {
        let indexCarrito = listaDeCarritos.findIndex((carrito) => carrito.id == idCarrito);
        if (indexCarrito == -1) {
          return false;
        } else {
          let indexProduct = listaDeCarritos[indexCarrito].productos.findIndex((producto) => producto.id === idProducto);
          if (indexProduct == -1) {
            return false;
          } else {
            listaDeCarritos[indexCarrito].productos.splice(indexProduct, 1);
            return true;
          }
        }
      }
}
module.exports = {Carrito};