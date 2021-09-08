import React from "react";
// import axios from 'axios'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  getData,
  wishlistAction,
} from "../redux/action/actionCreator";
import { Link } from "react-router-dom";

const Home = () => {
  const newproduct = useSelector((state) => state.mainReducer.products);
  const cartItem = useSelector((state) => state.addToCartReducer.cartItems);
  const wishItem = useSelector((state) => state.wishlistReducer.wishlistItems);
  console.log("WISHLIST NEW ITEMS", wishItem);

  // const newCart = cartItem.map((d) => <li key={d.id}>
  //     <img src={d.image} alt="" style={{ "height": "2rem" }} />
  //     {d.title} ${d.price}</li>)

  console.log("ALL CART ITEMS", cartItem);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  const handleAddToCart = (id) => {
    dispatch(addToCartAction(id));

    alert("product added successfully");
  };

  const handleWishlist = (id) => {
    dispatch(wishlistAction(id));
    alert("item added to wishlist");
  };
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    setItems(newproduct);
    // if (newproduct){
    //     setItems(newproduct)
    // }
    console.log("77777", newproduct);
  }, [newproduct]);

  return (
    <>
      <div className="container">
        <div className="child ms-5">
          {items &&
            items.map((product) => (
              <div className="main" key={product.id}>
                <div
                  className="card m-2"
                  style={{ width: "15rem", height: "26.5rem" }}
                >
                  <div className="d-flex flex-row-reverse">
                    <div className="p-2">
                      <i
                        className="fab fa-gratipay"
                        style={{ color: "red" }}
                        onClick={() => handleWishlist(`${product.id}`)}
                      ></i>
                    </div>
                  </div>

                  <Link to={`/product/${product.id}`}>
                    <img
                      className="card-img-top m-4"
                      style={{ width: "12rem", height: "9rem" }}
                      src={product.image}
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    {product.title.length >= 40 ? (
                      <h5 className="card-title">
                        {product.title.slice(0, 20) + "..."}
                      </h5>
                    ) : (
                      <h5 className="card-title">{product.title}</h5>
                    )}
                    <h6 className="card-text">{product.category}</h6>
                    <p className="card-text">{product.price}$</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(`${product.id}`)}
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
