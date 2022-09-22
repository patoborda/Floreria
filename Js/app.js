const contenedorProductos = document.getElementById('contenedor-productos');

stockProductos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
        <div class="card">
            <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">$<span>${producto.precio}</span></p>
              <button id="agregar${producto.id}" class="btn btn-primary">Agregar <i class="fas fa-shopping-cart"></i></button>
            </div>
        </div>`
    contenedorProductos.appendChild(div)
});