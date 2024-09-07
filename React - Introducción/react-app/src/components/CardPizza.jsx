import React from 'react';

export const CardPizza = ({ name, price, ingredients, img }) => {
  return (
	<div className="col-md-4">
      	<div className="card h-100">
			<img src={img} className="card-img-top" alt={name} />
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text text-center border-top border-bottom py-4">
					<strong>Ingredientes:</strong>
					<br />
					🍕 {ingredients.join(', ')}
				</p>
				<p className="card-text text-center">
					<strong>Precio:</strong> ${price.toLocaleString()}
				</p>
				<div className="d-flex justify-content-center">
					<button className="btn btn-primary me-2">Ver más</button>
					<button className="btn btn-success">Añadir</button>
				</div>
			</div>
		</div>
    </div>
  );
};


