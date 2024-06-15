let precio = 400000;
let cantidad = 0;

let precioSpan = document.querySelector(".precio-inicial");
let cantidadSpan = document.querySelector(".cantidad");
let totalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;
totalSpan.innerHTML = 0;

function actualizarTotal() {
	let total = precio * cantidad;
	totalSpan.innerHTML = total;
}

function incrementarCantidad() {
	cantidad++;
	cantidadSpan.innerHTML = cantidad;
	actualizarTotal();
}

function disminuirCantidad() {
	if (cantidad > 0) {
		cantidad--;
		cantidadSpan.innerHTML = cantidad;
		actualizarTotal();
	}
}