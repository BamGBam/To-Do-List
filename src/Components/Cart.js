import React from "react";
import PropTypes from "prop-types";

const Cart = ({ cartItems, onClear }) => {
    return (
        <>
            <ul>
                {cartItems.map(item => (
                    <li key={item}>{item} </li>
                ))}
                <button onClick={onClear}>Clear</button>
            </ul>
        </>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClear: PropTypes.func.isRequired,
};

export default Cart;
