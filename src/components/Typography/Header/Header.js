import React from 'react';
import PropTypes from 'prop-types';

import "./Header.scss";

const mapSizeToTag = size => {
  const sizes = {
    "xs": 6,
    "s": 5,
    "m": 4,
    "l": 3,
    "xl": 2,
    "xxl": 1
  };

  return size in sizes ? sizes[size] : 1;
}

const Header = ({ size, className, children }) => {
  const Tag = `h${mapSizeToTag(size)}`;

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
