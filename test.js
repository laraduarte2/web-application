const productos = [];

class Producto {
    constructor(id, nombre,color,precio,disponible){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.disponible = disponible;
    }

    createElement(){
        const newDiv = document.createElement("div");
        console.log("new div created");
    }
    
}

//declaración de objetos(productos) dentro del array productos.
    //idea: array de disponibles? o no es necesario, hay funciones mostrar los q propiedad sea igual a true en este caso. filters.
productos.push (new Producto(1, "remera","blanco",525, true));
productos.push (new Producto (2, "hoodie", "negro", 730, true));
productos.push (new Producto (3, "sweater", "verde", 920, true));
productos.push (new Producto (4, "remera", "rojo", 600, true));



//realizar una accion x todos los productos
for (let i=0; i <= productos.length; i++){
    //evento on load -> funcion para crear elementos html por cada producto
    productos[i].createElement();
}


