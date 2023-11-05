import React from "react";
import "./css/wishlist.css";
import ItemWishlist from "./ItemWishlist";
function Wishlist({ wishlist, onDeleteWishlist }) {
  const handleDeleteWishlist = (product) => {
    onDeleteWishlist(product);
  };
  let renderWishlist = wishlist.map((item, index) => {
    return (
      <ItemWishlist
        key={index}
        item={item}
        onDeleteWishlist={handleDeleteWishlist}
      />
    );
  });
  return (
    <>
      <p className="box-title-wishlist">Danh sách yêu thích</p>
      <div className="box-list-wishlist w-100">{renderWishlist}</div>
    </>
  );
}

export default Wishlist;
