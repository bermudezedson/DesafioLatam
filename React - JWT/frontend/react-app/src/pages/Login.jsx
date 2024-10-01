import { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AlertMessage from "../components/AlertMessage";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Login = () => {
	const { handleChangeLogin, handleLoginAsync, userSession, message } =
		useContext(UserContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (userSession) {
			navigate("/");
		}
	}, [userSession, navigate]);

	return (
		<div className="container py-5">
			<Form className="container py-5 w-50" onSubmit={handleLoginAsync}>
				<h1>Login</h1>
				<hr />

				{message && <AlertMessage variant="danger" message={message} />}

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Ingrese su correo electrónico"
						onChange={handleChangeLogin}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="password">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control
						type="password"
						name="password"
						placeholder="Ingrese su contraseña"
						onChange={handleChangeLogin}
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
