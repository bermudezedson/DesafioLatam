import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import AlertMessage from "../components/AlertMessage";
import { CartContext } from "../context/CartContext";

const Cart = () => {
	const { cart, removeFromCart } = useContext(CartContext);
	const totalProductos = cart.reduce((acc, item) => acc + item.cantidad, 0);

	const total = cart.reduce(
		(acc, item) => acc + item.cantidad * item.price,
		0
	);
	return (
		<div className="container py-5 mt-5">
			<h1>Carrito de Compras</h1>
			<hr className="pb-3" />
			{cart.length > 0 ? (
				<>
					<ul>
						{cart.map((producto, index) => (
							<li
								key={index}
								className="d-flex align-items-center justify-content-between mb-2"
							>
								<div className="d-flex align-items-center">
									<img
										src={producto.img}
										alt={producto.name}
										width="50"
										className="me-3"
									/>
									<span>
										{producto.name} - {producto.cantidad}{" "}
										unidades - $
										{producto.price.toLocaleString()}
									</span>
								</div>
								<Button
									variant="danger"
									onClick={() => removeFromCart(producto)}
									className="btn-sm"
								>
									Quitar
								</Button>
							</li>
						))}
					</ul>
					<h3>Total de productos: {totalProductos}</h3>
					<h3>Total a pagar: ${total.toLocaleString()}</h3>
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

export default Cart;
