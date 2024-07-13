function renderizarPropiedades(propiedades, containerId, limit) {
    const container = document.getElementById(containerId);
    propiedades.slice(0, limit).forEach(propiedad => {
        const propiedadHTML = `
			<div class="col mb-4">
				<div class="card">
					<img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento">
					<div class="card-body">
						<h5 class="card-title">${propiedad.nombre}</h5>
						<p class="card-text">${propiedad.descripcion}</p>
						<p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
						<p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
						<p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
						${propiedad.smoke ? '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>' : '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'}
						${propiedad.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
					</div>
				</div>
			</div>
        `;
        container.innerHTML += propiedadHTML;
    });
}

