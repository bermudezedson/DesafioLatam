import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [login, setLogin] = useState({
		email: "",
		password: "",
	});

	const [userSession, setUserSession] = useState(null);
	const [message, setMessage] = useState(null);

	const [register, setRegister] = useState({
		email: "",
		password: "",
	});

	const handleChangeLogin = (event) => {
		const { name, value } = event.target;
		setLogin({
			...login,
			[name]: value,
		});
	};

	const handleChangeRegister = (event) => {
		const { name, value } = event.target;
		setRegister({
			...register,
			[name]: value,
		});
	};

	const handleLoginAsync = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(
				"http://localhost:5001/api/auth/login",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: login.email,
						password: login.password,
					}),
				}
			);
			const data = await response.json();
			if (data.token) {
				localStorage.setItem("token", data.token);
				setUserSession({ token: data.token, email: login.email });
			} else {
				setMessage("Login fallido");
			}
		} catch (error) {
			setMessage("Error en el login");
		}
	};

	const handleRegisterAsync = async (email, password) => {
		try {
			const response = await fetch(
				"http://localhost:5001/api/auth/register",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password }),
				}
			);
			const data = await response.json();

			if (response.ok && data.token) {
				localStorage.setItem("token", data.token);
				setUserSession({ token: data.token, email: data.email });
				setMessage("¡Registro exitoso!");
			} else {
				setMessage(data.error || "Error en el registro");
			}
		} catch (error) {
			setMessage("Error en el registro");
		}
	};

	const handleCheckout = async (cart) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				setMessage("Debes iniciar sesión para continuar con la compra");
				return;
			}

			const response = await fetch(
				"http://localhost:5001/api/checkouts",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ cart }),
				}
			);

			const data = await response.json();

			if (response.ok && data.message === "Checkout successful") {
				setMessage("¡Compra exitosa!");
			} else {
				setMessage("Error en la compra");
			}
		} catch (error) {
			setMessage("Error en la compra");
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
		setUserSession(null);
	};

	return (
		<UserContext.Provider
			value={{
				handleChangeLogin,
				handleChangeRegister,
				handleLoginAsync,
				handleRegisterAsync,
				userSession,
				message,
				logout,
				handleCheckout,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
