export const formatoMonedaCLP = (number) => {
	return number.toLocaleString('es-ES', { style: 'currency', currency: 'CLP' });
};
export const stockEstado = (stock) => {
	if (stock > 0) {
		return "Disponible";
	} else {
		return "Agotado";
	}
}

export const badgeColorStock = (stock) => {
	if (stock > 0) {
		return "success";
	} else {
		return "danger"; 
	}
};
