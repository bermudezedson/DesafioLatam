/* import viteLogo from '/vite.svg' */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Register } from './components/Register';
import { Login } from './components/Login';

function App() {

  	return (
		<>
			<Navbar />
			<div className='container py-5'>
				<Register />
				<Login />
			</div>
			<Footer />
		</>
  	);
};

export default App
