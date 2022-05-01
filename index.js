//Proyecto: tienda online


const productos = [];
const carrito = [];
let precioFinal = 0;
let contador=0;

//declaración elementos html
const boton = document.getElementsByClassName("boton");
const iconCarrito = document.getElementById("iconCont__cart");
const carritoMenu = document.getElementById("carrito");
const carritoToggle = document.getElementById("carrito__toggle");
let divContainer = document.getElementById("car-row-cont");
let botonC = document.getElementById("botonC");
const iconUser = document.getElementById("iconUser");
const sidebar = document.getElementById("sidebar");

//carrito
let totalCont = document.getElementById("totalCont");
let precioCont = document.createElement("div");
let precioTotal= document.createElement("div");
precioCont.classList.add("carrito__precio");
totalCont.appendChild(precioCont);
precioCont.appendChild(precioTotal);

//local storage
let carritoEnLS = JSON.parse(localStorage.getItem("carrito"));

//obtener carrito de LS al refrescar página.
window.addEventListener("load", ()=>{
    if (localStorage.getItem("carrito") == "[]"){
        console.log("carrito vacío");
    }else{
        console.log("carrito no está vacío");
        for (i=0; i<carritoEnLS.length; i++){
            let prodFind = productos.find(productos => productos.id==carritoEnLS[i].id);
            let indexProd = productos.indexOf(prodFind);
            
            productos[indexProd].sumarTotal();
            productos[indexProd].añadirACarrito(contador);
            contador++;
            if (carrito.length > 0){
                botonC.classList.remove("d-none");
            }
        }
    }
})


//constructor objetos
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
        let newDiv = document.createElement("div");
        let divContainer= document.getElementById("divContainer");
        newDiv.classList.add("col-sm-3");
        newDiv.classList.add("card");
        divContainer.appendChild(newDiv);
        newDiv.innerHTML = "<img class='card__img2' src=''/></div><div class='card__caption'><div class='card__caption--info text-center'></div><button class='boton'>Agregar a carrito</button></div>";
        //cargar las imagenes
        const cardImg = document.getElementsByClassName("card__img2");
        cardImg[this.id].src=this.img;    

        const cardInfo = document.getElementsByClassName("card__caption--info");
        cardInfo[this.id].innerHTML = this.nombre +" "+this.color+"<strong> $"+ this.precio;
    }

    añadirACarrito(cont)
    {
    //añadir objeto producto al array carrito
    carrito.push(productos[this.id]);

    //declaración de elementos html de productos dentro del carrito
    let colImg = document.createElement("div");
    let colNombre = document.createElement("div");
    let colPrecio = document.createElement("div");
    let colElim = document.createElement("div")
    let divContainer = document.getElementById("car-row-cont");
    let row = document.createElement("div");
    const cols = [colImg, colNombre, colPrecio, colElim];

    row.classList.add("carrito__row");
    divContainer.appendChild(row);

    //mostrar precio final
    precioTotal.innerHTML="$"+precioFinal;
    
    //mostrar html 
    for (let i=0; i<cols.length;i++){
        cols[i].classList.add("carrito__row--item");
        row.appendChild(cols[i]);
    }

    colImg.innerHTML = "<img class='carrito__img' src='"+this.img +"'>";
    colNombre.innerHTML =this.nombre;
    colPrecio.innerHTML = "$"+this.precio;
    colElim.innerHTML= " <a href='#' class='nav__iconCont carElim'><i class='bi bi-trash-fill'></i></a>";

    //eliminar producto del carrito
    let carritoElim = document.getElementsByClassName("carElim");
    
    carritoElim[cont].addEventListener("click", ()=>{
        console.log("producto eliminado");
        row.classList.add("d-none");

        let index = carrito.indexOf(productos[this.id]);

        carrito.splice(index,1);
        console.log("cantidad de productos en carrito:", carrito.length);
        precioFinal=precioFinal-this.precio;
        precioTotal.innerHTML="$"+precioFinal;

        //eliminar el producto del carrito en local storage
        carritoEnLS = JSON.parse(localStorage.getItem("carrito"));

        //buscar elemento a eliminar en local storage
        let valueCart= carritoEnLS.find(carritoEnLS =>  carritoEnLS.id==[this.id]);

        let indexCart= carritoEnLS.indexOf(valueCart);

        //eliminar de local storage
        carritoEnLS.splice(indexCart,1);


        //actualizar local storage
        localStorage.setItem("carrito", JSON.stringify(carritoEnLS));

        if (carrito.length < 1){
            botonC.classList.add("d-none");
        }
        })

    //añadir producto a carrito en local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    }
    sumarTotal(){
        precioFinal= precioFinal + this.precio;
    }
    

}

//Declaración de objetos(productos) dentro del array productos.
productos.push (new Producto(0, "Camisa","blanca",525, true, "./assets/camisablanca.jpg"));
productos.push (new Producto (1, "Hoodie", "marrón", 730, true, "./assets/hoodiemarron.jpg"));
productos.push (new Producto (2, "Remera", "negra", 920, true, "./assets/remeranegra.jpg"));
productos.push (new Producto (3, "Remera", "roja", 600, true, "./assets/remeraroja.jpg"));
productos.push (new Producto(4, "Top", "blanco", 680, true, "./assets/topblanco.jpg"));
productos.push (new Producto(5, "Campera", "negra", 2500, true, "./assets/camperanegra.jpg"));
productos.push (new Producto (6, "Remera", "blanca", 735, true, "./assets/remerablanca.jpg"));



//Crear elementos html por cada producto
for (let i=0; i < productos.length; i++){
    productos[i].createHtml();
}




//Eventos en click de boton de agregar producto a carrito

for (let i=0; i<boton.length; i++){
    boton[i].addEventListener("click", () => 
    {
        
        //Añadir a array "carrito" con metodo push
        productos[i].sumarTotal();
        productos[i].añadirACarrito(contador); 
        console.log("Precio final:", precioFinal);
        console.log("Producto agregado al carrito correctamente, productos en carrito actualmente:");
        console.log(carrito);
        boton[i].innerHTML="Agregado al carrito";
        setTimeout( () => {
            boton[i].innerHTML= "Agregar a carrito";
        }, 1500);
        contador++;
        if (carrito.length > 0){
            botonC.classList.remove("d-none");
        }

        

        //Notificación c/ libreria toastify
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

//Carrito 

//abrir y cerrar vista de carrito
    iconCarrito.addEventListener("click", () => {
        carritoMenu.classList.remove("d-none");
    });

    carritoToggle.addEventListener("click", () => {
        carritoMenu.classList.add("d-none");
    })


botonC.addEventListener("click", () => {
    Swal.fire({
        title:"Gracias!",
        text: "Compra confirmada.",
        icon: "success",
        confirmButtonColor: "#608262",
        confirmButtonText: "Aceptar"
    })
    carrito.splice(0, carrito.length);
    divContainer.innerHTML=" ";
    precioFinal=0;
    precioTotal.innerHTML= "$"+precioFinal;
})
//user log-in
iconUser.addEventListener("click", () =>{
    Swal.fire({
        title:"Iniciar Sesión",
        icon: "info",
        html:
        '<label> E-mail </label>'+
        '<input id="swal-input1" class="swal2-input" type="email" placeholder="ejemplo@gmail.com">' +
        '<label>Contraseña</label>'+
        '<input id="swal-input2" class="swal2-input" type="password">',
        confirmButtonColor: "#608262",
        confirmButtonText: "Ingresar"
    })
    
})

//API Exchange Rate conversión de moneda
let usd = fetch("https://v6.exchangerate-api.com/v6/69fca2649bb1602c772276b8/pair/USD/ARS")
    .then ( (resp)=> resp.json() )
    .then ( (data) => {
        console.log(data);
        let moneda = document.createElement("div");
        moneda.classList.add("moneda");
        sidebar.appendChild(moneda);
        moneda.innerHTML ="1 USD = " +JSON.stringify(data.conversion_rate)+ " ARS";
    } )

console.log(usd);