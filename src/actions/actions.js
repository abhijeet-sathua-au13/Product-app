import { productsType } from "../actionTypes/actionTypes";

const productActions = {
  productList: (dispatch, getState) => {
    // console.log(getState);
    const path = "https://fakestoreapi.com/products";

    return fetch(path)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: productsType.list,
          payload: data,
        });
      });
  },
};

export default productActions;
