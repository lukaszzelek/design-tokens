import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children }) => (
  <button className={className}>
    {children}
  </button>
);

Button.propTypes = {
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Button;
