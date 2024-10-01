import React from 'react';
import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p>&copy; 2024 Pizzería Mamma Mía - Todos los derechos reservados</p>
      <p>Síguenos en <a href="#" className="text-white">Instagram</a> y <a href="#" className="text-white">Facebook</a></p>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;