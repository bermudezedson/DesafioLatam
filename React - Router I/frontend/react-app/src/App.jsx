import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import { pizzas as initialPizzas } from "./data/pizzas";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
			<Router>
				<Navbar total={handlePrecioTotal(cart)} />
				<Routes>
					<Route
						path="/"
						element={
							<Home
								addToCart={handleAddToCart}
								removeToCart={handleRemoveToCart}
								cart={cart}
							/>
						}
					/>
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/cart"
						element={
							<Cart
								cart={cart}
								totalProductos={handleCount(cart)}
								totalPrecio={handlePrecioTotal(cart)}
							/>
						}
					/>
					<Route
						path="/pizza/p001"
						element={
							<Pizza
								addToCart={handleAddToCart}
								removeToCart={handleRemoveToCart}
							/>
						}
					/>
					<Route path="/profile" element={<Profile />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
