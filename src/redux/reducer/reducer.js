// import { myProducts } from "../action/actionCreator";
import { SINGLE_PRODUCT_FETCH_SUCCESS } from "../constants/singleProductAction";
import { ADD_TO_CART } from "../constants/addToCartAction";
import { DELETE_ITEM } from "../constants/removeAction";
import { PRODUCTS } from "../constants/productsAction";
import { WISHLIST } from "../constants/wishlistAction";
import { REMOVE_WISHLIST } from "../constants/removeWishlist";
const initialState = {};

const mainReducer = (state = initialState, action) => {
  // console.log("333333", action.payload)
  switch (action.type) {
    case PRODUCTS:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};

export const singleProductFetchReducer = (state = {}, action) => {
  console.log("In Single Product Reducer", action.payload);
  switch (action.type) {
    case SINGLE_PRODUCT_FETCH_SUCCESS:
      return {
        singleProduct: action.payload,
      };

    default:
      return state;
  }
};

export const addToCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItems = action.payload;
      console.log("PAYLOAD", newItems);

      return {
        ...state,
        cartItems: [...state.cartItems, newItems],
      };

    case DELETE_ITEM:
      console.log("In Remove Cart Reducer: ", action.payload);
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};

export const wishlistReducer = (state = { wishlistItems: [] }, action) => {
  console.log("In WISH REDUCER", action.payload);
  switch (action.type) {
    case WISHLIST:
      const newItems = action.payload;

      return {
        ...state,
        wishlistItems: [...state.wishlistItems, newItems],
      };
    case REMOVE_WISHLIST:
      console.log("remove from wishlist: ", action.payload);
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (x) => x.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default mainReducer;
