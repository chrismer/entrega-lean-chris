let arrayDeProductos = []

class Contenedor{
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
  

}