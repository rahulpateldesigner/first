import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import loadingImg from "../../assets/loading-bar.gif";

const Products = ({ setKeyCategory }) => {
  const [products, setProducts] = useState();
  const [productCate, setProductCate] = useState();
  let { categoery } = useParams();

  if (categoery === "women-clothing") {
    categoery = "women's clothing";
  } else if (categoery === "men-clothing") {
    categoery = "men's clothing";
  }

  const fatchdata = async () => {
    setProducts();
    let res = await fetch(
      `https://fakestoreapi.com/products/category/${categoery}`
    );
    let data = await res.json();
    setProducts(data);
    setProductCate(data[0].category);
  };

  useEffect(() => {
    fatchdata();
    // eslint-disable-next-line
  }, [categoery]);

  return (
    <div>
      <div className="container">
        <h1 className="text-center text-capitalize my-3">
          Today's deal in {productCate}
        </h1>
        <div className="row g-3">
          {!products ? (
            <img src={loadingImg} alt="loading..." />
          ) : (
            products.map((e) => {
              return (
                <div className="col-md-6 col-lg-4 productCards" key={e.id}>
                  <div className="card p-3 h-100">
                    <span className="badge text-bg-warning position-absolute top-0 end-0 m-1">
                      Rating: {e.rating.rate}/5
                    </span>
                    <Link to={`/${e.category}/${e.id}`}>
                      <img
                        src={e.image}
                        className="card-img-top"
                        alt={e.title}
                      />
                    </Link>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">{e.title}</h5>
                      <p className="card-text text-muted">
                        <small>{e.description}</small>
                      </p>
                      <div className="d-flex justify-content-between mt-3">
                        <span className="badge text-bg-secondary fs-5 fw-light">
                          Price: ₹{e.price}
                        </span>
                        <Link
                          to={`/${e.category}/${e.id}`}
                          className="btn btn-primary"
                        >
                          View More »
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
