import React from 'react';
import { formatoMonedaCLP } from '../utils/helpers';

export const Navbar = () => {
	const total = 25000;
  	const token = false;
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">🍕 Pizzería Mamma Mía</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							{ token ? ( <>
							<li className="nav-item">
								<a className="nav-link" href="#">🔓 Profile</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">🔒 Logout</a>
							</li>
							</> ) : ( <>
							<li className="nav-item">
								<a className="nav-link" href="#">🔐 Login</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">🔐 Register</a>
							</li>
							</> )}
						</ul>
						<form className="d-flex" role="search">
							<a className="btn btn-dark" href="#">🛒 Total: ${ formatoMonedaCLP(total) }</a>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
};