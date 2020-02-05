import React from 'react';
import PropTypes from 'prop-types';

import "./Button.scss";

const Button = ({ className, children, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Button;
