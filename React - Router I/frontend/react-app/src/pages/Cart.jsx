import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import AlertMessage from "../components/AlertMessage";

const Cart = ({ cart, totalProductos, totalPrecio }) => {
	return (
		<div className="container py-5">
			<h1>Carrito de Compras</h1>
			<hr className="pb-3" />
			{cart.length > 0 ? (
				<>
					<ul>
						{cart.map((producto, index) => (
							<li key={index}>
								<img
									src={producto.img}
									alt={producto.name}
									width="50"
								/>
								{producto.name} - {producto.cantidad} unidades -
								${producto.price.toLocaleString()}
							</li>
						))}
					</ul>
					<h3>Total de productos: {totalProductos}</h3>
					<h3>Total a pagar: ${totalPrecio.toLocaleString()}</h3>
					<Button variant="success">Pagar</Button>
				</>
			) : (
				<AlertMessage
					variant="info"
					message="No hay productos en el carrito"
				/>
			)}
		</div>
	);
};

Cart.propTypes = {
	cart: PropTypes.array.isRequired,
	totalProductos: PropTypes.number.isRequired,
	totalPrecio: PropTypes.number.isRequired,
};

export default Cart;
