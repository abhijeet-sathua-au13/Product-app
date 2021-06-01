import React from 'react';
import './Product.css';


const Product = (props) => {
    return(
        <div className="ProductCard">
            <h3 style={{textAlign: 'center'}}>{props.title}</h3>
            <img className="imageStyle" src={props.imageURL} alt={props.title} />
            <p>Category: {props.category}</p>
            <h3>Price: $ {props.price}</h3>
            <button>Buy Now</button>
        </div>
    )
}

export default Product;