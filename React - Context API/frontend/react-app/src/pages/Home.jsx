import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
	const { addToCart } = useContext(CartContext);
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
								addToCart={addToCart}
							/>
						))}
				</div>
			</div>
		</>
	);
};

export default Home;
