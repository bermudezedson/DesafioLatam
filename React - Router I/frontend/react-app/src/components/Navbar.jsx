import React from "react";
import { formatoMonedaCLP } from "../utils/helpers";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ total }) => {
	const token = false;
	return (
		<>
			<nav
				className="navbar navbar-expand-lg bg-dark fixed-top"
				data-bs-theme="dark"
			>
				<div className="container-fluid">
					<Link className="navbar-brand" href="#">
						🍕 Pizzería Mamma Mía
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>
							{/* PUSE LOS LINKS VISIBLES DE MOMENTO SIN BORRAR LA VALIDACIÓN ANTERIOR */}
							<li className="nav-item">
								<Link className="nav-link" to="/profile">
									🔓 Profile
								</Link>
							</li>
							{token ? (
								<>
									<li className="nav-item">
										<Link
											className="nav-link"
											to="/profile"
										>
											🔓 Profile
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/">
											🔒 Logout
										</Link>
									</li>
								</>
							) : (
								<>
									<li className="nav-item">
										<Link className="nav-link" to="/login">
											🔐 Login
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link"
											to="/register"
										>
											🔐 Register
										</Link>
									</li>
								</>
							)}
						</ul>
						<form className="d-flex" role="search">
							<Link className="btn btn-dark" to="/cart">
								🛒 Total: ${formatoMonedaCLP(total)}
							</Link>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
};

Navbar.propTypes = {
	totalPrecio: PropTypes.number,
};

export default Navbar;
