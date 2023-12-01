import React from "react";
import { NavLink } from "react-router-dom";

function ItemCategory({ renderCategory }) {
  let ref = "products/" + renderCategory.slug;
  return (
    <>
      <div className="col-md-3">
        <div className="item">
          <img className="" src={renderCategory.icon} alt="Phòng khách" />
          <h4>
            <NavLink className="cl-blue" to={ref} title="Phòng khách">
              {renderCategory.title}
            </NavLink>
          </h4>
        </div>
      </div>
    </>
  );
}

export default ItemCategory;
