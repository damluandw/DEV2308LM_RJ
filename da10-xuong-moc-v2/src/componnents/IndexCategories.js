import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ItemCategory from "./componnetsItem/ItemCategory";

export const IndexCategories = ({ listCategory }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    
    listCategory.then((listCategory) => {
      setCategories(listCategory);
    });
  }, []);
  let elementCategories =
    categories == [] ? (
      <></>
    ) : (
      categories.map((item, index) => {
        return (
          <ItemCategory
            key={item.id}
            renderCategory={item}
            rollNo={index + 1}
          />
        );
      })
    );
  return (
    <section id="catalog">
      <div className="catalog-box">
        <div className="container">
          <div className="row">{elementCategories}</div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    listCategory: state.listCategory,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(IndexCategories);
