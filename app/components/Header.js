import React from 'react';

const Header = ({
    title
}) => (
    <h1>{title}</h1>
);

Header.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default Header;