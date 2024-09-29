import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Home from "./components/Home";
//import { Register } from './components/Register';
//import { Login } from './components/Login';
import Pizza from "./components/Pizza";
import Cart from "./components/Cart";
import { pizzas as initialPizzas } from "./data/pizzas";
import { useState } from "react";

function App() {
	const [productos, setProductos] = useState(initialPizzas);
	const [cart, setCart] = useState([]);

	const handleAddToCart = (producto) => {
		if (cart.some((productoCart) => productoCart.id == producto.id)) {
			const update = cart.map((productoCart) =>
				productoCart.id == producto.id
					? { ...productoCart, cantidad: productoCart.cantidad + 1 }
					: productoCart
			);
			setCart(update);
		} else {
			setCart([
				...cart,
				{
					...producto,
					cantidad: 1,
				},
			]);
		}
	};

	const handleRemoveToCart = (producto) => {
		if (cart.some((productoCart) => productoCart.id == producto.id)) {
			const update = cart.map((productoCart) => {
				if (productoCart.cantidad > 0) {
					return productoCart.id == producto.id
						? {
								...productoCart,
								cantidad: productoCart.cantidad - 1,
						  }
						: productoCart;
				}
				console.log(update);
			});

			const productsFiltered = update.filter(
				(productoCart) => productoCart.cantidad > 0
			);

			console.log(productsFiltered);

			setCart(productsFiltered);
		}
	};

	const handleCount = (items = []) => {
		return items.reduce(
			(acumulador, producto) => acumulador + producto.cantidad,
			0
		);
	};

	const handlePrecioTotal = (items = []) => {
		return items.reduce(
			(acumulador, producto) =>
				acumulador + producto.price * producto.cantidad,
			0
		);
	};

	return (
		<>
			<Navbar />
			{/*
			<Home
				addToCart={handleAddToCart}
				removeToCart={handleRemoveToCart}
				cart={cart}
			/>
			<div className='container py-5'>
				<Register />
				<Login />
			</div>
			*/}
			<Pizza
				addToCart={handleAddToCart}
				removeToCart={handleRemoveToCart}
			/>
			<Cart
				cart={cart}
				totalProductos={handleCount(cart)}
				totalPrecio={handlePrecioTotal(cart)}
			/>
			<Footer />
		</>
	);
}

export default App;
