import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteAction } from "../redux/action/actionCreator";

const Cart = () => {
  const dispatch = useDispatch();

  const [tempCartItem, setTempCartItem] = useState([]);

  const cartItem = useSelector((state) => state.addToCartReducer.cartItems);
  let itemsPrice = cartItem.reduce((a, c) => a + c.price, 0);
  console.log(cartItem);

  const deleteItem = (e) => {
    console.log("Deleteing id :", e);
    dispatch(deleteAction(e));
  };

  useEffect(() => {
    if (cartItem) {
      setTempCartItem(cartItem);
    }
  }, [cartItem]);

  return (
    <>
      {cartItem.length === 0 ? (
        <h1
          className="d-flex justify-content-center mt-2"
          style={{ backgroundColor: "white" }}
        >
          Cart is Empty!
        </h1>
      ) : (
        <>
          <h1 className="d-flex justify-content-center mt-2">Cart Page</h1>
          <div className="container" style={{ height: "86vh" }}>
            <div
              className="row mb-2 d-flex justify-content-center mt-4"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <div className="col-md-8" style={{ backgroundColor: "white" }}>
                <div
                  className="row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                  style={{ backgroundColor: "white" }}
                ></div>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th></th>
                    </tr>
                  </thead>

                  {tempCartItem.map((ci) => {
                    return (
                      <>
                        <tbody>
                          <tr key={ci.id}>
                            <td>
                              <img
                                src={ci.image}
                                alt=""
                                style={{ height: "3rem", width: "3rem" }}
                              />
                            </td>
                            <td>{ci.title}</td>
                            <td>{ci.price}$</td>
                            <td>
                              <i
                                className="fas fa-trash-alt"
                                onClick={(e) => {
                                  deleteItem(ci.id);
                                }}
                              ></i>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    );
                  })}
                  <tbody>
                    <tr>
                      <th>Total</th>
                      <td></td>
                      <td className="p-2">{Math.ceil(itemsPrice)}$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
