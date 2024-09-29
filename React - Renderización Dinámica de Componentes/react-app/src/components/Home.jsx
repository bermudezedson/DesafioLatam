import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import CardPizza from "./CardPizza";
// HOME ES PRODUCTOS

const Home = ({ productos, addToCart, removeToCart }) => {
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
	productos: PropTypes.array.isRequired,
	addToCart: PropTypes.func.isRequired,
	removeToCart: PropTypes.func.isRequired,
};

export default Home;
