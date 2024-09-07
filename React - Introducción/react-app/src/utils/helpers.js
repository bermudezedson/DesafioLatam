export const formatoMonedaCLP = (number) => {
	return number.toLocaleString('es-ES', { style: 'currency', currency: 'CLP' });
  };
  