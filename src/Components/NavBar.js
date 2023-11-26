import React from "react";
import PropTypes from "prop-types";

const NavBar = ({cartItemCount}) =>{
    return(
        <div>The number of items in the cart are {cartItemCount}</div>
    )
}

NavBar.propTypes = {
    cartItemCount: PropTypes.number.isRequired,
};

export default NavBar;
