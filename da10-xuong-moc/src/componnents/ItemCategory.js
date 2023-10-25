import React from "react";

function ItemCategory({renderCategory}) {
    let img  = ".."+ renderCategory.icon
  return (
    <>
      <div className="col-md-3">
        <div className="item">
          <img className="" src={img} alt="Phòng khách" />
          <h4>
            <a className="cl-blue" href="#" title="Phòng khách">
              {renderCategory.title}
            </a>
          </h4>
        </div>
      </div>
    </>
  );
}

export default ItemCategory;
