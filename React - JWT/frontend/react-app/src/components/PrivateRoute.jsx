import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
	const { userSession } = useContext(UserContext);

	return userSession?.token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
