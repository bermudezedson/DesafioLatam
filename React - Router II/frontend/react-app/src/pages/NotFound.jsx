import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<div className="container text-center py-5">
				<h1>NotFound</h1>
				<Link className="btn btn-danger ms-2" to="/">
					Volver al inicio
				</Link>
			</div>
		</>
	);
};

export default NotFound;
