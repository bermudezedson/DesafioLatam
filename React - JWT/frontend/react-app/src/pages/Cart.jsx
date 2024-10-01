import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import AlertMessage from "../components/AlertMessage";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
	const { cart, removeFromCart } = useContext(CartContext);
	const { handleCheckout, userSession, message } = useContext(UserContext);

	const total = cart.reduce(
		(acc, item) => acc + item.cantidad * item.price,
		0
	);

	const handleCheckoutClick = () => {
		if (userSession) {
			handleCheckout(cart);
		} else {
			alert("Debes iniciar sesión para continuar con la compra");
		}
	};
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
									/>
									{producto.name} - {producto.cantidad}{" "}
									unidades - $
									{producto.price.toLocaleString()}
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
					<h3>Total a pagar: ${total.toLocaleString()}</h3>
					<Button
						variant="success"
						onClick={handleCheckoutClick}
						disabled={!userSession}
					>
						Pagar
					</Button>
					{message && (
						<AlertMessage variant="info" message={message} />
					)}
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
