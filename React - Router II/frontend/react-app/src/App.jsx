import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<>
			<UserProvider>
				<CartProvider>
					<Router>
						<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/register" element={<Register />} />
							<Route path="/login" element={<Login />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/pizza/:id" element={<Pizza />} />
							<Route
								path="/profile"
								element={
									<PrivateRoute>
										<Profile />
									</PrivateRoute>
								}
							/>
							<Route path="*" element={<NotFound />} />
						</Routes>
						<Footer />
					</Router>
				</CartProvider>
			</UserProvider>
		</>
	);
}

export default App;
