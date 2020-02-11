import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import "./Button.scss";

const Button = ({
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'after',
  className,
  children,
  ...props
}) => {
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

  const iconBefore = icon && iconPosition === 'before' ? icon : null;
  const iconAfter = icon && iconPosition === 'after' ? icon : null;

  return (
    <button className={buttonClasses} {...props}>
      {iconBefore}
      <span>{children}</span>
      {iconAfter}
    </button>
)};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  iconPosition: 'after'
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'subtle', 'danger']),
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large', 'x-large']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['after', 'before']),
  className: PropTypes.string,
  children: PropTypes.node
}

export default Button;
