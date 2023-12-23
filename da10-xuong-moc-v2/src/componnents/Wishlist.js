import React from "react";
import ItemWishlist from "./componnetsItem/ItemWishlist";

function Wishlist({ wishlist }) {
  let renderWishlist = wishlist.map((item, index) => {
    const handleDeleteWishlist = (product) => {
      // onDeleteWishlist(product);
    };
    return <ItemWishlist key={index} item={item} />;
  });
  return (
    <>
      <p className="box-title-wishlist">Danh sách yêu thích</p>
      <div className="box-list-wishlist w-100">{renderWishlist}</div>
    </>
  );
}

export default Wishlist;
