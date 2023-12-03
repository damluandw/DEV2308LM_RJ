import React from "react";
import { NavLink } from "react-router-dom";

function ItemCategory({ renderCategory }) {
  let ref = "products/" + renderCategory.slug;
  return (
    <>
      <div className="col-md-3">
        <div className="item">
          <div className="img-category">
            <img
              className="w-100"
              src={`assets/${renderCategory.icon}`}
              alt="Phòng khách"
            />
          </div>
          <div className="mt-3">
            <h4>
              <NavLink className="cl-blue" to={ref} title="Phòng khách">
                {renderCategory.title}
              </NavLink>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCategory;
