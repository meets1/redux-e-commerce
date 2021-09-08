import axios from "axios";
import { SINGLE_PRODUCT_FETCH_SUCCESS } from "../constants/singleProductAction";
import { ADD_TO_CART } from "../constants/addToCartAction";
import { DELETE_ITEM } from "../constants/removeAction";
import { PRODUCTS } from "../constants/productsAction";
import { WISHLIST } from "../constants/wishlistAction";
import { REMOVE_WISHLIST } from "../constants/removeWishlist";

const config = {
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const getData = () => {
  return (dispatch) => {
    // https://fakestoreapi.com/products
    axios.get(" http://localhost:3000/products").then((response) => {
      dispatch({
        type: PRODUCTS,
        payload: response.data,
      });
      console.log(response.data);
    });
  };
};

export const fetchSingleProductAction = (id) => {
  console.log("In Single Product Action: ", id);
  return (dispatch) => {
    console.log("In Dispatch");
    axios
      .get(` http://localhost:3000/products/${id}`, config)
      .then((res) => {
        console.log("RES FROM ACTION: ", res.data);
        dispatch({
          type: SINGLE_PRODUCT_FETCH_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => console.log("Error getting single Product", error));
  };
};

export const addToCartAction = (id) => {
  return (dispatch) => {
    console.log("ADD TO CART ACTION", id);
    axios.get(`http://localhost:3000/products/${id}`).then((response) => {
      dispatch({
        type: ADD_TO_CART,
        payload: response.data,
      });
    });
  };
};

export const deleteAction = (id) => {
  console.log("In remove cart action: ", id);
  return (dispatch) => {
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  };
};

export const wishlistAction = (id) => {
  console.log("In wishlist action: ", id);
  return (dispatch) => {
    axios.get(`http://localhost:3000/products/${id}`).then((response) => {
      dispatch({
        type: WISHLIST,
        payload: response.data,
      });
    });
  };
};
export const deleteWishlist = (id) => {
  console.log("In remove cart action: ", id);
  return (dispatch) => {
    dispatch({
      type: REMOVE_WISHLIST,
      payload: id,
    });
  };
};
