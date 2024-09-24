import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState();

  const { id } = useParams();

  // if(categoery==="women-clothing"){
  //   categoery = "women's clothing";
  // }else if(categoery==="men-clothing"){
  //   categoery = "men's clothing";
  // }

  const fatchdata = async () => {
    setProductDetail();
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await res.json();
    setProductDetail(data);
  };

  useEffect(() => {
    fatchdata();
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="container my-5 py-5">
      {/* {console.log(productDetail)} */}
      {!productDetail ? (
        "loading"
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
              <p>
                Rated: {productDetail.rating.rate}/5 - by{" "}
                {productDetail.rating.count} Customer
              </p>
              <button type="button" className="btn btn-success">
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
