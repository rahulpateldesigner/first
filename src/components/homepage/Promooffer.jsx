import React from 'react'
import promoimg1 from "../../assets/promo1.jpeg"
import promoimg2 from "../../assets/promo2.jpeg"
import promoimg3 from "../../assets/promo3.jpeg"

const Promooffer = () => {
  return (
    <div className="container my-5 text-center">
  <div className="row align-items-start">
    <div className="col">
        <div className="card">
            <img width={'100%'} src={promoimg1} alt="" />
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img width={'100%'} src={promoimg2} alt="" />
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img width={'100%'} src={promoimg3} alt="" />
        </div>
    </div>
  </div>
</div>
  )
}

export default Promooffer
