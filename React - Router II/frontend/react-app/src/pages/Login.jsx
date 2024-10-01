import { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AlertMessage from "../components/AlertMessage";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Login = () => {
	const [emailLogin, setEmailLogin] = useState("");
	const [passwordLogin, setPasswordLogin] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const { token, login } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			navigate("/");
		}
	}, [token, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();

		setError("");
		setSuccess("");

		if (!emailLogin || !passwordLogin) {
			setError("Todos los campos son obligatorios");
			return;
		}

		if (passwordLogin.length < 6) {
			setError("La contraseña debe tener al menos 6 caracteres");
			return;
		}

		login();
		setSuccess("¡Inicio de sesión exitoso!");

		setTimeout(() => {
			navigate("/");
		}, 1000);
	};

	return (
		<div className="container py-5">
			<Form className="container py-5 w-50" onSubmit={handleSubmit}>
				<h1>Login</h1>
				<hr />

				{error && <AlertMessage variant="danger" message={error} />}
				{success && (
					<AlertMessage variant="success" message={success} />
				)}

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Ingrese su correo electrónico"
						value={emailLogin}
						onChange={(e) => setEmailLogin(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="password">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control
						type="password"
						placeholder="Ingrese su contraseña"
						value={passwordLogin}
						onChange={(e) => setPasswordLogin(e.target.value)}
						autoComplete="current-password"
						required
					/>
				</Form.Group>

				<div className="d-grid gap-5">
					<Button variant="primary" type="submit">
						Iniciar sesión
					</Button>
				</div>
			</Form>
		</div>
	);
};
