/* import viteLogo from '/vite.svg' */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
//import { Register } from './components/Register';
//import { Login } from './components/Login';
//import Cart from './components/Cart';

function App() {

  	return (
		<>
			<Navbar />
			<Home />
			{/*
			
			<div className='container py-5'>
				<Register />
				<Login />
			</div>
			
			<Cart />
			
			*/}
			<Footer />
		</>
  	);
};

export default App
