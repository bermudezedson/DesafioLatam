import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
//import { pizzas } from '../data/pizzas';
//import { CardPizza } from './CardPizza';

const Home = (props) => {
  	return (
		<>
			<Header />
			<div className="container">
				<div className="grid-productos">Home</div>
			</div>
		</>
  	);
};

Home.propTypes = {};

export default Home;