import React from "react";
import PropTypes from "prop-types";

// const myComp = cartItems.map((item) =>(
//     <li key={index}>{item}</li>

// ));

const Cart = ({cartItems, onClear}) =>{
    return(
        <>
        <div>Cart is :</div>
        <ul>
            {cartItems.map(item => <li key={item}>{item}</li>)}
        </ul>
        <button onClick={onClear}>CLEAR</button>
        </>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClear: PropTypes.func.isRequired,
};

export default Cart;
