// Hago un constructor

class Producto {
    constructor (nombreProducto,precio,stock,id) {
        this.producto = nombreProducto;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.id = parseInt(id)
    }
    mostrarProducto(){
        alert(`Nuestros productos son:\nProducto: ${this.producto}, Precio: $${this.precio},  Stock: ${this.stock} y ID: ${this.id}`)
    }
    agregarCanasto(){
        subTotalCompra = subTotalCompra + this.precio
    }
}

// Creo los objetos que necesito gracias al constructor

const remera = new Producto("Remera", 2500, 10, 1);
const pantalon = new Producto("Pantalon", 5000, 20, 2);
const zapatillas = new Producto("Zapatillas", 3500, 8, 3);
const gorra = new Producto("Gorra", 1000, 5, 4);
const campera = new Producto("Campera", 4500, 10, 5);

// Creo un array para ingresar ahi los objetos creados con el class

const listaDeProductos = [];
listaDeProductos.push(remera,pantalon,zapatillas,gorra,campera)

// Utilizo el metodo FILTER para tener un filtrado de los productos que su monto es menor a 3000.

const productosBaratos = listaDeProductos.filter(producto => producto.precio < 4000)
console.log(productosBaratos);

// Utilizo DOM, Eventos y JSON

// Uso addEventListener para mostrar mensaje en consola y uso DOM para mostrar productos

const btn1 = document.getElementById("productosBoton")

btn1.onclick = () => {
    const productosListaContainer = document.querySelector(".productos-lista-container")
    for (const producto of listaDeProductos) {
        let contenedor = document.createElement("div");
        let contenido =
        `<h3>Producto: ${producto.producto}</h3>
        <p>Precio: $${producto.precio}<p>
        <p>Stock: ${producto.stock} unidades`;
        contenedor.innerHTML = contenido
        productosListaContainer.append(contenedor)
    }

}

// Agrego un buscador de productos en la pagina implementando EVENTOS y DOM

const btn2 = document.getElementById("buscadorBoton")

btn2.addEventListener("click", () => {

    const input = document.getElementById("entrada")
    const productoBuscado = input.value
    const buscadorContainer = document.querySelector(".buscador-productos")

    listaDeProductos.forEach( () => {

        const resultado = listaDeProductos.find((el) => el.producto == productoBuscado)

        if (resultado == true) {
            let contenedor = document.createElement("div")
            let contenido = 
            `<h3>El producto que usted busco es:</h3> 
            <p>El producto es ${listaDeProductos[el].producto} y su precio es: $${listaDeProductos[el].precio}.</p>`
            contenedor.innerHTML = contenido
            buscadorContainer.append(contenedor)
        };
    })   
})

// Agrego un buscador de productos en la pagína implementando EVENTOS y DOM

// const btn2 = document.getElementById("buscadorBoton")

// btn2.addEventListener("click", () => {

//     const input = document.getElementById("entrada")
//     let productoBuscado = input.value
//     console.log(productoBuscado);
//     const buscadorContainer = document.querySelector(".buscador-productos")

//     if (productoBuscado == "Remera" || productoBuscado == "remera"){

//         let contenedor = document.createElement("div")
//         let contenido =
//         `<h3>El producto que usted busco es:</h3> 
//         <p>El producto es ${listaDeProductos[0].producto} y su precio es: $$     {listaDeProductos[0].precio}.</p>`
//         contenedor.innerHTML = contenido
//         buscadorContainer.append(contenedor)

//     } else if (productoBuscado == "Pantalon" || productoBuscado == "pantalon") {

//         let contenedor = document.createElement("div")
//         let contenido =
//         `<h3>El producto que usted busco es:</h3> 
//         <p>El producto es ${listaDeProductos[1].producto} y su precio es: $${listaDeProductos[1].precio}.</p>`
//         contenedor.innerHTML = contenido
//         buscadorContainer.append(contenedor)

//     } else if (productoBuscado == "Zapatillas" || productoBuscado == "zapatillas") {

//         let contenedor = document.createElement("div")
//         let contenido = 
//         `<h3>El producto que usted busco es:</h3> 
//         <p>El producto es ${listaDeProductos[2].producto} y su precio es: $${listaDeProductos[2].precio}.</p>`
//         contenedor.innerHTML = contenido
//         buscadorContainer.append(contenedor)

//     } else if (productoBuscado == "Gorra" || productoBuscado == "gorra") {

//         let contenedor = document.createElement("div")
//         let contenido =  
//         `<h3>El producto que usted busco es:</h3> 
//         <p>El producto es ${listaDeProductos[3].producto} y su precio es: $${listaDeProductos[3].precio}.</p>`
//         contenedor.innerHTML = contenido
//         buscadorContainer.append(contenedor)

//     } else if (productoBuscado == "Campera" || productoBuscado == "campera") {

//         let contenedor = document.createElement("div")
//         let contenido = 
//         `<h3>El producto que usted busco es:</h3> 
//         <p>El producto es ${listaDeProductos[4].producto} y su precio es: $${listaDeProductos[4].precio}.</p>`
//         contenedor.innerHTML = contenido
//         buscadorContainer.append(contenedor)

//     } else {

//         let contenedor = document.createElement("div")
//         let contenido =  
//         `<h4>El producto que busca no se encuentra disponible.</h4>`
//         contenedor.innerHTML = contenido
//         buscadorContainer.append(contenedor)

//     }
// })

// Aplico localStorage para almacenar los productos ahí

localStorage.setItem("PRODUCTOS", JSON.stringify(listaDeProductos))
let productosLocalStorage = localStorage.getItem('PRODUCTOS')

// Comienzo el if dependiendo lo que seleccione el usuario en el confirm, mostramos nuestros productos uno por uno y el usuario ingresa que prendas desea comprar

let consultaComprar = confirm("Desea realizar alguna compra por nuestra tienda online?");

let subTotalCompra = 0;

let carritoProductos = 0;

if (consultaComprar == false) {

    alert("Gracias por visitar la tienda web de Mode Kove!")

} else {

    remera.mostrarProducto();
    pantalon.mostrarProducto();
    zapatillas.mostrarProducto();
    gorra.mostrarProducto();
    campera.mostrarProducto();

    const usuario = {
        nombre : prompt("Ingrese un nombre de usuario para guardar su progreso en la tienda."),
        edad : parseInt(prompt("Ingrese su edad."))
    }

    localStorage.setItem("Usuario", JSON.stringify(usuario))

    while (consultaComprar == true) {

        let consultaPrenda = prompt("Que prenda desea comprar?\nEscriba 'Remera', 'Pantalon', 'Zapatillas', 'Gorra', 'Campera' o 'Finalizar' para terminar la compra!")

        switch (consultaPrenda) {

            case "Remera":
                alert("Hemos agregado una 'remera' a tu carrito!\nEl precio es: $"+remera["precio"])
                remera.agregarCanasto()
                carritoProductos++ //Operador ++
                break

            case "Pantalon":
                alert("Hemos agregado un 'pantalon' a tu carrito!\nEl precio es: $"+pantalon["precio"]);
                pantalon.agregarCanasto();
                carritoProductos++
                break

            case "Zapatillas":
                alert("Hemos agregado unas 'zapatillas' a tu carrito!\nEl precio es: $"+zapatillas["precio"])
                zapatillas.agregarCanasto()
                carritoProductos++
                break

            case "Gorra":
                alert("Hemos agregado una 'gorra' a tu carrito!\nEl precio es: $"+gorra["precio"])
                gorra.agregarCanasto()
                carritoProductos++
                break

            case "Campera":
                alert("Hemos agregado una 'campera' a tu carrito!\nEl precio es: $"+campera["precio"])
                campera.agregarCanasto()
                carritoProductos++
                break

            case "Finalizar":
                consultaComprar = false
                // Aplicamos la funcion flecha "finalizacionCompra" en el subtotal de la compra.
                const finalizacionCompra = () => {

                    if (subTotalCompra > 10000) {
                        let interes = 1.21
                        alert("La compra de el/los producto/s tendra un recargo del 21%")
                        let totalAPagar = subTotalCompra * interes
                        alert(`El total a pagar es $${totalAPagar} y se esta llevando ${carritoProductos} productos de Moda Kove`)
                        function consultaPagar() {
                            let edad = usuario.edad // Desestructuración
                            edad < 18 ? alert("No puedes realizar la compra por favor llama a tu padre, madre o tutor para finalizar la compra.") : alert("El pago ha sido ingresado!") // Operador ternario
                        }
                        consultaPagar()
                        return totalAPagar

                    } else {
                        let interes = 0
                        alert("La compra de el/los producto/s no tendran ningún recargo")
                        let totalAPagar = subTotalCompra + interes
                        alert(`El total a pagar es $${totalAPagar} y se esta llevando ${carritoProductos} productos de Moda Kove`)
                        function consultaPagar() {
                            let edad = usuario.edad // Desestructuración 
                            edad < 18 ? alert("No puedes realizar la compra por favor llama a tu padre, madre o tutor para finalizar la compra.") : alert("El pago ha sido ingresado!") // Operador ternario
                        }
                        consultaPagar()
                        return totalAPagar

                    }
                }
                finalizacionCompra(0)
                break
            default:
                alert("No has seleccionado ninguna opción, por favor ingrese correctamente lo que desee!")   
        }
    }
}

