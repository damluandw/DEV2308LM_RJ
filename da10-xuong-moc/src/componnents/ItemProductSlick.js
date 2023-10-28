import React from "react";
import { Link } from 'react-router-dom'
function ItemProductSlick({ renderProduct }) {
  let img = ".." + renderProduct.image;
  return (
    <>
      <div className="item-product col-12 d-flex justify-content-center">
        <div className="w-90">
          <div className="img-product">
            <img
              className="w-100"
              src={renderProduct.image}
              alt={renderProduct.image}
            />
          </div>
          <div className="product-info text-center w-100 mt-3">
            <Link to=  {`/products/propduct-detail/${renderProduct.id}`}>
              <h4>{renderProduct.title}</h4>
            </Link>

            <div className="image5">
              <p className="vote m-0">
                <span>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
              </p>
            </div>
            <div className="product-describe">(Size lớn,trắng sữa)</div>
            <div className="product-price">
              {renderProduct.priceNew}
              <span> VNĐ</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemProductSlick;
