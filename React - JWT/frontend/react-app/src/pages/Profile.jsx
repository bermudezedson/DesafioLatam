import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
	const { userSession, logout } = useContext(UserContext);

	return (
		<div className="container py-5 mt-5">
			<h2>Perfil de Usuario</h2>

			<p>Email: {userSession?.email}</p>

			<button className="btn btn-danger" onClick={logout}>
				Cerrar sesión
			</button>
		</div>
	);
};

export default Profile;
