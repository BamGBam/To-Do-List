import { useEffect, useState } from "react";

const ProductList = () =>{

    const [products, setProducts] = useState([]);
    
    useEffect(()=> {
        console.log('Fetching products');
        setProducts(['Clothing','Household']);
    }, [])

    return(
        <div>
            <select>
                <option value="Clothing">Clothing</option>
                <option value="Shoe">Shoe</option>
                <option value="Under wear">Under Wear</option>
            </select>
        </div>
    )

} 

export default ProductList;