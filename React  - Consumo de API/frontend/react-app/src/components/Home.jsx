import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import CardPizza from "./CardPizza";
// HOME ES PRODUCTOS

const Home = ({ addToCart, removeToCart }) => {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		const fetchProductos = async () => {
			try {
				const response = await fetch(
					"http://localhost:5001/api/pizzas"
				);
				const data = await response.json();
				setProductos(data);
			} catch (error) {
				console.error("Error al cargar las pizzas:", error);
			}
		};

		fetchProductos();
	}, []);

	return (
		<>
			<Header />
			<div className="container py-5">
				<div className="row">
					<h1>Catalogo de Productos</h1>
					<hr className="pb-3" />
				</div>
				<div className="grid-productos">
					{productos?.length &&
						productos.map((producto, key) => (
							<CardPizza
								key={key}
								{...producto}
								removeToCart={removeToCart}
								addToCart={addToCart}
							/>
						))}
				</div>
			</div>
		</>
	);
};

Home.propTypes = {
	addToCart: PropTypes.func.isRequired,
	removeToCart: PropTypes.func.isRequired,
};

export default Home;
