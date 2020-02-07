import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import "./Button.scss";

const Button = ({ variant = 'primary', size = 'medium', className, children, ...props }) => {
  const buttonClasses = classNames(
    "btn",
    {
      [`btn--${variant}`]: true
    },
    {
      [`btn--${size}`]: true
    },
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
)};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium'
}

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Button;
