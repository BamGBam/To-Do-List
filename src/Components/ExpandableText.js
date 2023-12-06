import React from "react";
import PropTypes from "prop-types";
import { useState } from 'react';


const ExpandableText = ({children, maxChars = 200}) =>{
    const [isExpanded, setExpanded] = useState(false);
    if(children.length <= maxChars) return <p> {children}</p>
    const newText = isExpanded? children: children.substring(0, maxChars);

    return(
        <div> {newText}...<button onClick={() => setExpanded(!isExpanded)}> {isExpanded? 'Less' : 'More'} </button> </div>
    )
}
  
ExpandableText.propTypes = {
    children: PropTypes.arrayOf(PropTypes.string).isRequired,
    maxChars: PropTypes.arrayOf(PropTypes.number).isRequired,

    onClear: PropTypes.func.isRequired,
};

export default ExpandableText;