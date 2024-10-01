import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AlertMessage from "../components/AlertMessage";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");
		setSuccess("");

		if (!email || !password || !confirmPassword) {
			setError("Todos los campos son obligatorios.");
			return;
		}

		if (password.length < 6) {
			setError("La contraseña debe tener al menos 6 caracteres.");
			return;
		}

		if (password !== confirmPassword) {
			setError("Las contraseñas no coinciden.");
			return;
		}

		setSuccess("¡Registro exitoso!");
	};

	return (
		<>
			<div className="container py-5">
				<Form className="container py-5 w-50" onSubmit={handleSubmit}>
					<h1>Registro</h1>
					<hr />

					{error && <AlertMessage variant="danger" message={error} />}
					{success && (
						<AlertMessage variant="success" message={success} />
					)}

					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							name="emailregistro"
							type="email"
							placeholder="Ingrese su E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							autoComplete="username"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="password1">
						<Form.Label>Contraseña</Form.Label>
						<Form.Control
							name="password1"
							type="password"
							placeholder="Ingrese su Contraseña"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="new-password"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="password2">
						<Form.Label>Repita su Contraseña</Form.Label>
						<Form.Control
							name="password2"
							type="password"
							placeholder="Repita su Contraseña"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							autoComplete="new-password"
						/>
					</Form.Group>
					<div className="d-grid gap-5">
						<Button variant="primary" type="submit">
							Registrarme
						</Button>
					</div>
				</Form>
			</div>
		</>
	);
};
