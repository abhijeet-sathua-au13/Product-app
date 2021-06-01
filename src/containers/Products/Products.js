import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import productActions from '../../actions/actions';
import Product from '../../components/Product/Product';
import './Products.css';

const Products = (props) => {

    const { dispatch } = props;


    useEffect(() => {
        dispatch(productActions.productList);

    }, [dispatch])

    console.log(props)

    return (
        <div className="ProductPage">
            <h1 style={{color:'#393e46', marginLeft: '1rem'}}>Products</h1>
            <div className="productContainer">
                {props.products.map((product,index) => {
                    return(
                        <Product key={index} title={product.title} imageURL={product.image} category={product.category} price={product.price} />
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({products: state.products})
export default connect(mapStateToProps)(Products);