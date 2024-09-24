import React, { useContext } from "react";
import { ThemeContext, CartitemContext } from "../../global/Contexts";
import deleteicon from "../../assets/cross-icon.webp";

const CartCanvas = () => {
  const { theme } = useContext(ThemeContext);
  const { cartItems, setCartItems } = useContext(CartitemContext);

  const handleDeletecart = (index)=>{    
    // Create a new array without the item at the specified index
    const newItems = [...cartItems];
  newItems.splice(index, 1);
    setCartItems(newItems)
  }

  return (
    <div>
      {/* {console.log(cartItems)} */}
      <div
        className="offcanvas offcanvas-end"
        data-bs-theme={theme}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Your Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="container">
            {!cartItems
              ? "Nothing to Show"
              : cartItems.map((e, index) => {
                  return (
                    <div className="card mb-2 bg-light text-dark">
                      <div className="row card-body p-3 gy-0 gx-2">
                        <div className="col-3">
                          <img width="100%" src={e.image} alt={e.title} />
                        </div>
                        <div className="col-8">
                          <p className="fw-semibold lh-sm mb-1">{e.title}</p>
                          <p className="mb-1 text-secondary">
                            Price: ₹{e.price}/-
                          </p>
                          <p className="mb-1 text-secondary">Qty: {e.qty}</p>
                        </div>
                        <div className="col-1">
                          <img onClick={()=>{handleDeletecart(index)}}
                            width={"15px"}
                            role="button"
                            src={deleteicon}
                            alt="delete"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCanvas;
