let tareas = [
    { id: Date.now(), descripcion: 'Tarea inicial', completada: false }
];

function renderizarTareas() {
    const listaTareas = document.getElementById('task-list');
    listaTareas.innerHTML = '';
    tareas.forEach(tarea => {
        listaTareas.innerHTML += `
				<tr class="align-self-center">
					<th class="align-self-center" scope="row">${tarea.id}</th>
					<td><label class="form-check-label" for="tarea${tarea.id}">${tarea.descripcion}</label></td>
					<td><input class="form-check-input" type="checkbox" value="" id="tarea${tarea.id}" onchange="tareaCompleta(${tarea.id}, this.checked)" ${tarea.completada ? 'checked' : ''}></td>
					<td><button onclick="eliminarTarea(${tarea.id})" class="btn btn-sm btn-danger">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
							<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
						</svg>
					</button></td>
				</tr>
            </li>
        `;
    });
    actualizarResumen();
}

function agregarTarea() {
    const inputNuevaTarea = document.getElementById('nueva-tarea');
    const descripcionNuevaTarea = inputNuevaTarea.value.trim();
    if (descripcionNuevaTarea) {
        tareas.push({ id: Date.now(), descripcion: descripcionNuevaTarea, completada: false });
        inputNuevaTarea.value = '';
        renderizarTareas();
    }
}

function eliminarTarea(idTarea) {
    tareas = tareas.filter(tarea => tarea.id !== idTarea);
    renderizarTareas();
}

function tareaCompleta(idTarea, estaCompletada) {
    const tarea = tareas.find(tarea => tarea.id === idTarea);
    if (tarea) {
        tarea.completada = estaCompletada; 
        renderizarTareas(); 
    }
}

function actualizarResumen() {
    document.getElementById('total-tareas').textContent = tareas.length;
    const tareasCompletadas = tareas.filter(tarea => tarea.completada).length;
    document.getElementById('tareas-completadas').textContent = tareasCompletadas;
}

function cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
        tareas = JSON.parse(tareasGuardadas);
    } else {
        tareas = [
            { id: Date.now() + 1, descripcion: 'Tarea 1', completada: false },
            { id: Date.now() + 2, descripcion: 'Tarea 2', completada: true },
            { id: Date.now() + 3, descripcion: 'Tarea 3', completada: false }
        ];
    }
    renderizarTareas();
}

document.addEventListener('DOMContentLoaded', function() {
    cargarTareas();
    const inputNuevaTarea = document.getElementById('nueva-tarea');
    inputNuevaTarea.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarTarea(); 
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', cargarTareas);