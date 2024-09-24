import React from 'react';
import PropTypes from 'prop-types';

export const CardPizza = ({ id, name, price, stock, ingredients, img, desc }) => {
  	return (
		<>
		<div className="col-md-4 mb-4">
			<div className="card h-100">
				<img src={img} className="card-img-top" alt={name} />
				<div className="card-body">
				<h5 className="card-title text-uppercase">{name} <span>sku: {id}</span></h5>
				<p className="card-text text-center border-top border-bottom py-4">
					<strong>🍕  Ingredientes:</strong>
					<br />
					<ul>
						{
							ingredients.map((ingredient, index) => (
								<li key={index}>{ingredient}</li>  
							))
						}
					</ul>
				</p>
				<p className="card-text text-center">
					<strong>Precio:</strong> ${price.toLocaleString()}
				</p>
				<div className="d-flex justify-content-center">
					<button className="btn btn-sm btn-primary me-2">Ver más</button>
					<button className="btn btn-success">Añadir</button>
				</div>
				</div>
			</div>
		</div>
		</>
  );
};

// Validación de PropTypes para asegurar que se reciben las props correctas
CardPizza.propTypes = {
	id: PropTypes.string.isRequired,
  	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	stock: PropTypes.number,
	ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
	desc: PropTypes.string,
};