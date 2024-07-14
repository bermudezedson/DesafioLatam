const API_URL = 'https://mindicador.cl/api/'
const containerGrafico = document.getElementById('mostrar_grafico').getContext('2d');
let chartRef = null

const fetchAPI = async() => {
	try {
	
		const data = await (await fetch(API_URL)).json()
		const monedasFiltradas = Object.entries(data)
			.filter(([_, moneda]) => typeof moneda == 'object' && moneda.unidad_medida == 'Pesos')
			.map(([_, { codigo, nombre, valor }]) => ({ codigo, nombre, valor }) )

		mostrarMonedas(monedasFiltradas);


	} catch (error) {
		alert("Sistema de conversiones NO disponible por el momento")
		deshabilitarElementos()

	}
	
}

fetchAPI()

function deshabilitarElementos() {
    document.getElementById('monto').disabled = true;
    document.getElementById('selectMonedas').disabled = true;
    document.getElementById('btnConvertir').disabled = true;
}

const mostrarMonedas = (monedas) => {
    const selectMonedas = document.getElementById('selectMonedas');
    selectMonedas.innerHTML = '<option selected>Selecciona moneda</option>';

    monedas.forEach(moneda => {
        const option = document.createElement('option');
        option.value = moneda.valor;
		option.setAttribute('data-codigo', moneda.codigo);
        option.textContent = `${moneda.nombre}`;
        selectMonedas.appendChild(option);
    })
}

const convertirMoneda = async () => {
	
    const inputMonto = document.getElementById('monto');
	const montoCLP = parseFloat(document.getElementById('monto').value)
    const selectMonedas = document.getElementById('selectMonedas')
    const monedaSeleccionada = selectMonedas.options[selectMonedas.selectedIndex]
    const valorMoneda = parseFloat(monedaSeleccionada.value)
	const codigoMoneda = monedaSeleccionada.getAttribute('data-codigo')

	if (inputMonto.value.trim() === "") {
        alert("Por favor, ingresa un monto en Pesos Chilenos");
        inputMonto.focus();  
        return;  
    }

    if (selectMonedas.selectedIndex === 0) {
        alert("Por favor, selecciona una moneda para convertir.");
        selectMonedas.focus(); 
        return; 
    }

    if (!isNaN(montoCLP) && !isNaN(valorMoneda) && valorMoneda !== 0) {
        
		const resultado = montoCLP / valorMoneda;
        document.getElementById('resultado').innerText = 'Resultado : ' + resultado.toFixed(2) + ' ' + codigoMoneda

		if(chartRef) chartRef.destroy()
		
		const datosGrafico = await traerFechas(API_URL, codigoMoneda);
		if (datosGrafico) {
			mostrarGrafico(datosGrafico, containerGrafico);
		}

    } else {
        document.getElementById('resultado').innerText = 'Entrada inválida'
    }

	

}


const traerFechas = async (API_URL, codigoMoneda) => {  

    try {

        const dataJson 	= await fetch(`${API_URL}${codigoMoneda}`)
        const { serie } = await dataJson.json()
		
		const labels = []
		const data 	= []
		
		serie.slice(0, 10).forEach(({ fecha, valor }) => {
			const soloFecha = fecha.split('T')[0]
			labels.push(soloFecha)
			data.push(valor)
		})
        
		return {
			labels,
			data
		}

    } catch (error) {

		alert('Por el momento no se pueden mostrar las estadísticas')
		return null

    }

}

const mostrarGrafico = ( datosGrafico, container) => {


	chartRef = new Chart(container, {
		type: 'line',
		data: {
			labels: datosGrafico.labels,
			datasets: [{
				label: 'Evolución por Fecha',
				data: datosGrafico.data,
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				//y: {
				//beginAtZero: true
				//}
			}
		}
	})


}


