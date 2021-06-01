import { productsType } from '../actionTypes/actionTypes';

const initialState = {
    products: []
};

const products =  (state,action) => {
    state = state || initialState;

    switch(action.type){
        case productsType.list:
            return {
                products: [...action.payload]
            }
        
        default:
            return state
    }

}

export default products;