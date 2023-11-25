import React from "react";
import PropTypes from "prop-types";

const NavBar = ({ cartItemCount }) => {
    return (
        <div>NavBar: {cartItemCount}</div>
    );
};

NavBar.propTypes = {
    cartItemCount: PropTypes.number.isRequired,
};

export default NavBar;
