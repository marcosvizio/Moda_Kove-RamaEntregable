const botonesAgregarCarrito = document.querySelectorAll(".btn-comprar")

botonesAgregarCarrito.forEach((agregarCarrito) => {

    agregarCarrito.addEventListener("click", botonCarritoClick);

})

const carritoItemsContainer = document.querySelector(".carrito-compra-container")

function botonCarritoClick(event) {
    const boton = event.target

    const producto = boton.closest(".card")

    const nombreProducto = producto.querySelector(".card-title").textContent
    const precioProducto = producto.querySelector(".precio-producto").textContent
    const imagenProducto = producto.querySelector(".imagen-producto").src
    
    agregarItemsCarrito(nombreProducto, precioProducto, imagenProducto);
}

function agregarItemsCarrito(nombreProducto, precioProducto, imagenProducto) {
    const carritoLista = document.createElement("div")
    const carritoContenido = 
    `<div class="row">
        <div class="col-6">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src='${imagenProducto}' class="imagen-producto-carrito">
                <h6 class=" text-truncate ml-3 mb-0">${nombreProducto}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="mb-0">${precioProducto}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="" type="number" value="1">
                <button class="btn btn-danger" type="button">X</button>
            </div>
        </div>
    </div>`;
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){}
      }).showToast();
    carritoLista.innerHTML = carritoContenido
    carritoItemsContainer.append(carritoLista)
}