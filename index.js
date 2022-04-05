//Proyecto: tienda online

const productos = [];
const carrito = [];

localStorage.setItem("carrito", JSON.stringify(carrito));
let carritoEnLS = JSON.stringify(localStorage.getItem("carrito"));
if (carritoEnLS){
    carrito = carritoEnLS;
}else{
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


class Producto {
    constructor(id, nombre,color,precio,disponible, img){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.disponible = disponible;
        this.img = img;
    }
    //crea elemento html cada vez que se añade objeto producto al array productos.
    createHtml(){
        const newDiv = document.createElement("div");
        const divContainer= document.getElementById("divContainer");
        newDiv.classList.add("col-sm-3");
        newDiv.classList.add("card");
        divContainer.appendChild(newDiv);
        newDiv.innerHTML = "<img class='card__img2' src=''/></div><div class='card__caption'><div class='card__caption--info text-center'></div><button class='boton'>Agregar a carrito</button></div>";
        //cargar las imagenes
        const cardImg = document.getElementsByClassName("card__img2");
        cardImg[this.id].src=this.img;    

        const cardInfo = document.getElementsByClassName("card__caption--info");
        cardInfo[this.id].innerHTML = this.nombre +" $"+ this.precio;
    }
    añadirACarrito()
    {
    carrito.push(productos[this.id]);
    }
}

//declaración de objetos(productos) dentro del array productos.
productos.push (new Producto(0, "Remera","blanco",525, true, "./assets/producto2.png"));
productos.push (new Producto (1, "Hoodie", "negro", 730, true, "./assets/producto2.png"));
productos.push (new Producto (2, "Sweater", "verde", 920, true, "./assets/producto2.png"));
productos.push (new Producto (3, "Remera", "rojo", 600, true, "./assets/producto2.png"));



//realizar una accion x todos los productos
for (let i=0; i < productos.length; i++){
    //evento on load -> funcion para crear elementos html por cada producto
    productos[i].createHtml();
}

//declaración elementos html
const boton = document.getElementsByClassName("boton");
const iconCarrito = document.getElementById("iconCont__cart");
const carritoMenu = document.getElementById("carrito");
const carritoToggle = document.getElementById("carrito__toggle");


//Eventos en click de boton de agregar producto a carrito
for (let i=0; i<boton.length; i++){
    boton[i].addEventListener("click", () => 
    {
        //Añadir a array "carrito" con metodo push
        productos[i].añadirACarrito(); 
        console.log("Producto agregado al carrito correctamente, productos en carrito actualmente:");
        console.log(carrito);
        boton[i].innerHTML="Agregado al carrito";

        Toastify(
            {
                text: "Agregado al carrito!",
                duration: 3000,
                gravity: "bottom",
                position: "left",
                stopOnFocus: false,
                style: {
                background: "linear-gradient(to bottom, #608262, #608262)",
                }
            }
        ).showToast();

    });
}

//carrito *en proceso*


iconCarrito.addEventListener("click", () => {
    carritoMenu.classList.remove("d-none");
});

carritoToggle.addEventListener("click", () => {
    carritoMenu.classList.add("d-none");
})
