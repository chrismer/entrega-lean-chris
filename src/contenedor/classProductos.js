let arrayDeProductos = []

class Productos{
    static id = 1

    obtenerTodos(){
        if(arrayDeProductos.length >= 1){
            return arrayDeProductos
        }else {
            return []
        }
    }
    obtenerPorId(id){
        const productoBuscado = arrayDeProductos.find(elemento => elemento.id == id)
        if(productoBuscado == undefined){
            return {mensaje:"No se encontro el producto"}
        } else {
            return productoBuscado
        }
    }
   existeElId(id){
    const productoBuscado = arrayDeProductos.find(elemento => elemento.id == id)
    if(productoBuscado == undefined){
        return false
    }else{
        return true
    }
   }
  guardarProducto(producto){
    if (producto.timestamp && producto.name && producto.descripcion && producto.code && producto.thumbnail && producto.price && producto.stock) {
        producto.id = Productos.id;
        arrayDeProductos.push(producto);
        Productos.id++;
        return producto;
      } else {
        return {mensaje:"Campo de producto faltante"}
      }
  }
  actualizarPorId(id,producto){
    const productoBuscado = arrayDeProductos.find(elemento => elemento.id == id)
    if(productoBuscado == undefined){
        return {mensaje:"el id no existe..."}
    }else{
        if (producto.timestamp && producto.name && producto.descripcion && producto.code && producto.thumbnail && producto.price && producto.stock) {
            resultado.timestamp = producto.timestamp;
            resultado.name = producto.name;
            resultado.descripcion = producto.descripcion;
            resultado.code = producto.code;
            resultado.thumbnail = producto.thumbnail;
            resultado.price = producto.price;
            resultado.stock = producto.stock;
          } else {
            return {mensaje: "No ingreso todas las variables que tiene un producto..."}
          }
    }
  }
  borrarPorId(id){
    const productoBuscado = arrayDeProductos.find(elemento => elemento.id != id)
    if(productoBuscado == undefined){
        return {mensaje: "no existe ese id"}
    }else{
        const productosNoEliminados = arrayDeProductos.filter(elemento => elemento.id != id)
        productosNoEliminados.push(arrayDeProductos)
    }
  }
}

module.exports = {Productos};