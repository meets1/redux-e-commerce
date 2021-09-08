import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchSingleProductAction } from "../redux/action/actionCreator";
import { addToCartAction } from "../redux/action/actionCreator";

const Product = () => {
  const { productId } = useParams();
  const [pdata, setPdata] = useState([]);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct.singleProduct);

  const handleClick = (ele) => {
    dispatch(addToCartAction(ele));
    alert("product added successfully");
  };

  useEffect(() => {
    dispatch(fetchSingleProductAction(productId));
  }, [productId, dispatch]);

  useEffect(() => {
    if (product) {
      setPdata([product]);
      console.log("USE EFFECT", product);
      console.log("USE EFFECT PDATA", pdata);
    }
  }, [product, pdata]);

  return (
    <>
      <div className="container-fluid" style={{ height: "86vh" }}>
        {pdata.map((p) => {
          return (
            <div
              className="row mb-2 d-flex justify-content-center mt-4"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <div className="col-md-6">
                <div
                  className="m-2 p-2 row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                  style={{ backgroundColor: "white" }}
                >
                  <div className=" m-2 col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                      {p.category}
                    </strong>
                    <h3 className="">{p.title}</h3>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      {p.description}
                    </p>
                    <strong className="card-text mb-2">{p.price}$</strong>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleClick(`${p.id}`)}
                    >
                      Add to cart
                    </button>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img
                      src={p.image}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ width: "300px", height: "300px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
