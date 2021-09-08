import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteWishlist } from "../redux/action/actionCreator";

const Wishlist = () => {
  const dispatch = useDispatch();
  const [wItem, setWitem] = useState([]);
  const wishItem = useSelector((state) => state.wishlistReducer.wishlistItems);
  console.log("WITEM", wishItem);

  const handleRemove = (e) => {
    console.log("Deleteing from wishlist :", e);
    dispatch(deleteWishlist(e));
  };

  useEffect(() => {
    if (wItem) {
      setWitem(wishItem);
    }
  }, [wishItem, wItem]);

  return (
    <>
      {wItem.length === 0 ? (
        <h1
          className="d-flex justify-content-center mt-2"
          style={{ backgroundColor: "white" }}
        >
          Wishlist is Empty!
        </h1>
      ) : (
        <>
          <h1 className="d-flex justify-content-center mt-2"> Wishlist </h1>
          <div className="container" style={{ height: "86vh" }}>
            <div
              className="row mb-2 d-flex justify-content-center mt-4"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <div className="col-md-8" style={{ backgroundColor: "white" }}>
                <div
                  className="row g-0 flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                  style={{ backgroundColor: "white" }}
                ></div>
                <table className="table table-borderless">
                  {wItem.map((ci) => {
                    return (
                      <>
                        <tbody key={ci.id}>
                          <tr>
                            <td>
                              <img
                                src={ci.image}
                                alt=""
                                style={{ height: "3rem", width: "3rem" }}
                              />
                            </td>
                            <td> {ci.title} </td>
                            <td> {ci.price}$ </td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={(e) => {
                                  handleRemove(ci.id);
                                }}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Wishlist;
