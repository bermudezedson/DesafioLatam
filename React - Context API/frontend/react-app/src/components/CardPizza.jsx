import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import Badge from "react-bootstrap/Badge";
//import { stockEstado, badgeColorStock } from "../utils/helpers";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ desc, id, img, ingredients, name, price }) => {
	const { addToCart, removeFromCart } = useContext(CartContext);
	return (
		<>
			<Card>
				<Card.Img variant="top" src={img} />
				<Card.Body>
					<Card.Title>
						{name}
						{/*
						<Badge bg={badgeColorStock(stock)} className="ms-3">
							{stockEstado(stock)}
						</Badge>*/}
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
						onClick={() => {
							addToCart({
								desc,
								id,
								img,
								ingredients,
								name,
								price,
							});
						}}
						variant="primary"
					>
						Añadir al Carrito
					</Button>
					<Button
						onClick={() => {
							removeFromCart({
								desc,
								id,
								img,
								ingredients,
								name,
								price,
							});
						}}
						variant="danger"
					>
						Quitar
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};

CardPizza.propTypes = {
	desc: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	ingredients: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default CardPizza;
