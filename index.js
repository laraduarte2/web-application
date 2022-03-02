
//Proyecto: Tienda online

alert("Agregar productos al carrito de compras");


//Variable global para poder utilizarla dentro del bloque de la función y que su valor se acumule
var precioFinal=0;

function elegirProducto (prod1,prod2,prod3,prod4){
    //Mostrar productos disponibles
    alert(`Productos disponibles:
    producto 1, precio: ${prod1}, 
    producto 2, precio: ${prod2}, 
    producto 3, precio: ${prod3}, 
    producto 4, precio: ${prod4}, `);

    //Guardar la elección del user en la variable
    let respuestaUser = parseInt(prompt(`Ingrese el numero de producto que desea comprar`));

    if (respuestaUser==1 || respuestaUser==2 || respuestaUser==3 || respuestaUser==4){

        console.log(`El user eligió el producto ${respuestaUser}`);
        alert(`Añadió el producto ${respuestaUser} al carrito`);

    }else{
        alert("Por favor ingrese un numero de producto válido (1-4)");
    }


    //Añadir precio del producto elegido al precio final

    switch(respuestaUser){
        case 1: 
            precioFinal  = precioFinal + prod1;
            alert(`El precio final hasta ahora es: ${precioFinal}`);
            break;
        case 2:
            precioFinal = precioFinal + prod2;
            alert(`El precio final hasta ahora es: ${precioFinal}`);
            break;
        case 3:
            precioFinal = precioFinal + prod3;
            alert(`El precio final hasta ahora es: ${precioFinal}`);
            break;
        case 4:
            precioFinal = precioFinal + prod4;
            alert(`El precio final hasta ahora es: ${precioFinal}`);
            break;
        default:
            break;
    }
    
    
    
}



let producto1 = 200;
let producto2 = 499;
let producto3 = 855;
let producto4 = 350;



//Cantidad de ciclos del FOR
let cantidadCompras = parseInt(prompt("Cuantos productos le gustaría comprar? Ingrese un numero entero"));


//le da al user la opcion de elegir la cantidad de productos especificada.
for (let i=0; i<cantidadCompras; i++){
    //Mostrar y elegir productos con la función

        elegirProducto(producto1, producto2, producto3, producto4);

    //test
    console.log("hola");
}

alert(`El precio final es: ${precioFinal}`);