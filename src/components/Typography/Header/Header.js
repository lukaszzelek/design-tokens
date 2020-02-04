import React from 'react';
import PropTypes from 'prop-types';

import "./Header.scss";

const Header = ({ size, className, children }) => {
  const Tag = `h${size}`;

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}

Header.propTypes = {
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Header;
