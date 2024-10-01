import React, { useContext } from "react";
import { formatoMonedaCLP } from "../utils/helpers";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
	const { cart } = useContext(CartContext);
	const { userSession, logout } = useContext(UserContext);

	const total = cart.reduce(
		(acc, item) => acc + item.cantidad * item.price,
		0
	);

	return (
		<>
			<nav
				className="navbar navbar-expand-lg bg-dark fixed-top"
				data-bs-theme="dark"
			>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
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
							{userSession ? (
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
										<button
											className="nav-link btn btn-link"
											onClick={logout}
										>
											🔒 Logout
										</button>
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

export default Navbar;
