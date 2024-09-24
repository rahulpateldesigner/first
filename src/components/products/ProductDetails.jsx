import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { CartitemContext } from "../../global/Contexts";
import loadingImg from "../../assets/loading-bar.gif";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState();
  const inputRef = useRef(1);
  // const [prodQty, setProdQty] = useState({'qty': 1 });
  // const [itemwithQty, setItemwithQty] = useState();
  const { cartItems, setCartItems } = useContext(CartitemContext);

  const { id } = useParams();

  const fatchdata = async () => {
    setProductDetail();
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await res.json();
    setProductDetail(data);
  };

  useEffect(() => {
    fatchdata();
    // eslint-disable-next-line
  }, []);

  
  const handleAddtoCart = (data) => {
    const setItemwithQty = Object.assign(productDetail, {
      qty: Number(inputRef.current.value),
    });
    
    const uniqueArray = Array.from(new Set((cartItems.concat(setItemwithQty)).map(JSON.stringify))).map(JSON.parse);

   // setCartItems(Array.from(new Set(cartItems.map(JSON.stringify))).map(JSON.parse).concat(setItemwithQty));
    setCartItems(uniqueArray);
  };

  return (
    <div className="container my-5 py-5">
      {!productDetail ? (
        <img src={loadingImg} alt="loading..." />
      ) : (
        <>
          <div className="row justify-content-start">
            <div className="col-5">
              <div className="card">
                <div className="card-body p-5">
                  <img width="100%" src={productDetail.image} alt="" />
                </div>
              </div>
            </div>
            <div className="col-7">
              <span className="badge fs-5 mb-3 text-capitalize text-bg-secondary">
                {productDetail.category}
              </span>
              <h1 className="mb-3">{productDetail.title} </h1>
              <p>{productDetail.description}</p>
              <p className="fs-5">Price: ₹{productDetail.price}/-</p>
              <div className="mb-2">
                Qty -{" "}
                <input
                  ref={inputRef}
                  defaultValue={1}
                  placeholder={1}
                  type="number"
                  name="age"
                  min={1}
                  max={10}
                />{" "}
              </div>
              <p>
                Rated: {productDetail.rating.rate}/5 - by{" "}
                {productDetail.rating.count} Customer
              </p>
              <button
                onClick={() => {
                  handleAddtoCart(productDetail);
                }}
                type="button"
                className="btn btn-success"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
