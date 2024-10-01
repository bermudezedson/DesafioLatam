import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (producto) => {
		setCart((prevCart) => {
			if (
				prevCart.some((productoCart) => productoCart.id == producto.id)
			) {
				const update = prevCart.map((productoCart) =>
					productoCart.id == producto.id
						? {
								...productoCart,
								cantidad: productoCart.cantidad + 1,
						  }
						: productoCart
				);
				return update;
			} else {
				const newCart = [...prevCart, { ...producto, cantidad: 1 }];
				return newCart;
			}
		});
	};

	const removeFromCart = (producto) => {
		const exists = cart.find((item) => item.id === producto.id);
		if (exists.cantidad === 1) {
			setCart(cart.filter((item) => item.id !== producto.id));
		} else {
			setCart(
				cart.map((item) =>
					item.id === producto.id
						? { ...exists, cantidad: exists.cantidad - 1 }
						: item
				)
			);
		}
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};
