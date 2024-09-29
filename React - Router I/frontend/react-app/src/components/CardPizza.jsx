import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { stockEstado, badgeColorStock } from "../utils/helpers";

const CardPizza = ({
	desc,
	id,
	stock,
	img,
	ingredients,
	name,
	price,
	addToCart,
	removeToCart,
}) => {
	return (
		<>
			<Card>
				<Card.Img variant="top" src={img} />
				<Card.Body>
					<Card.Title>
						{name}
						<Badge bg={badgeColorStock(stock)} className="ms-3">
							{stockEstado(stock)}
						</Badge>
						<p className="m-0 small">
							<strong>SKU:</strong> {id}
						</p>
					</Card.Title>
					<div className="card-text">
						<span className="d-block">{desc}</span>
						<div className="card-text text-center border-top border-bottom py-4">
							<strong>🍕 Ingredientes:</strong>
							<br />
							<ul>
								{ingredients.map((ingredient, index) => (
									<li key={index}>{ingredient}</li>
								))}
							</ul>
						</div>
						<span className="d-block">
							${price.toLocaleString()}
						</span>
					</div>
					<Button
						onClick={() =>
							removeToCart({
								desc,
								id,
								stock,
								img,
								ingredients,
								name,
								price,
								addToCart,
							})
						}
						variant="danger"
					>
						Quitar
					</Button>
					<Button
						onClick={() =>
							addToCart({
								desc,
								id,
								stock,
								img,
								ingredients,
								name,
								price,
								addToCart,
							})
						}
						variant="primary"
					>
						Añadir al Carrito
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};

CardPizza.propTypes = {
	desc: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	stock: PropTypes.number.isRequired,
	img: PropTypes.string.isRequired,
	ingredients: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	addToCart: PropTypes.func.isRequired,
	removeToCart: PropTypes.func.isRequired,
};

export default CardPizza;
