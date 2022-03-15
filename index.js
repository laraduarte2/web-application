

//Proyecto: Tienda online



//clase constructora objetos

class Producto {
    constructor(nombre,color,precio,disponible){
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.disponible = disponible;
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
    }
}

//Declaracion objetos con funcion constructora

const producto1 = new Producto("camisa","blanco",525, true);

const producto2 = new Producto ("hoodie", "negro", 730, true);

const producto3 = new Producto ("sweater", "verde", 920, true);

const producto4 = new Producto ("remera", "rojo", 600, true);


//Array de objetos
const productos = [producto1, producto2, producto3, producto4];

//Declaracion arrays y variables

const carrito = [];


let precioFinal = 0;



//Función para agregar productos al carrito y sumar precio final
function añadirProducto (arrayProductos){
    let productoElegido = prompt("Ingrese el nombre del producto que desea agregar al carrito").toLowerCase();
    
    switch(productoElegido){
        case "camisa":
            carrito.push(producto1);
            console.log("Se añadió el producto al carrito, el precio final hasta ahora es: ");
            precioFinal = precioFinal + producto1.precio;
            console.log(precioFinal);
            break;
        case "hoodie":
            carrito.push(producto2);
            console.log("Se añadió el producto al carrito, el precio final hasta ahora es: ");
            precioFinal = precioFinal + producto2.precio;
            console.log(precioFinal);
            break;
        case "sweater":
            carrito.push(producto3);
            console.log("Se añadió el producto al carrito, el precio final hasta ahora es: ");
            precioFinal = precioFinal + producto3.precio;
            console.log(precioFinal);
            break;
        case "remera":
            carrito.push(producto4);
            console.log("Se añadió el producto al carrito, el precio final hasta ahora es: ");
            precioFinal = precioFinal + producto4.precio;
            console.log(precioFinal);
            break;
    }
}



//Interaccion con usuario

let comprobacion = prompt("Agregar productos al carrito de compras. Desea continuar? ingrese Si para continuar");

do {
    
    if (comprobacion =="Si" || comprobacion =="si" || comprobacion=="SI"){
        
        alert("Los productos se mostrarán a través de la consola");

        console.log("Productos dispobles:")

        for (const Producto of productos){
            console.log("Nombre: " + Producto.nombre);
            console.log("Color: " + Producto.color);
            console.log("Precio: " + Producto.precio);
            console.log("Disponible: " + Producto.disponible);
        }

        añadirProducto(productos);

        console.log("Productos en el carrito:");
        console.log(carrito);

    }else{
        break;
    }
    
    comprobacion = prompt("Desea continuar? ingrese Si para continuar");
}while(comprobacion=="si" || comprobacion=="Si" || comprobacion=="SI")



