import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatoMonedaCLP } from "../utils/helpers";
import PropTypes from "prop-types";

const Pizza = () => {
	const [pizza, setPizza] = useState(null);
	const { addToCart, removeFromCart } = useContext(CartContext);

	useEffect(() => {
		const fetchPizza = async () => {
			try {
				const response = await fetch(
					"http://localhost:5001/api/pizzas/p002"
				);
				const data = await response.json();
				setPizza(data);
			} catch (error) {
				console.error("Error al cargar la pizza:", error);
			}
		};

		fetchPizza();
	}, []);

	return (
		<div className="container py-5 mt-5">
			{pizza ? (
				<>
					<div className="row">
						<div className="col">
							<h1 className="text-uppercase">{pizza.name}</h1>
							<hr />
						</div>
					</div>
					<div className="row">
						<div className="col">
							<img
								src={pizza.img}
								alt={pizza.name}
								className="img-fluid"
							/>
						</div>
						<div className="col">
							<p>{pizza.desc}</p>
							<h3>🍕 Ingredientes:</h3>
							<ul>
								{pizza.ingredients.map((ingredient, index) => (
									<li key={index} className="text-capitalize">
										{ingredient}
									</li>
								))}
							</ul>
							<h3>Precio: ${pizza.price.toLocaleString()} c/u</h3>
							<button
								className="btn btn-primary"
								onClick={() => addToCart(pizza)}
							>
								Añadir al Carrito
							</button>
							<button
								className="btn btn-danger ms-2"
								onClick={() => removeFromCart(pizza)}
							>
								Quitar del Carrito
							</button>
						</div>
					</div>
				</>
			) : (
				<p>Cargando información de la pizza...</p>
			)}
		</div>
	);
};

export default Pizza;