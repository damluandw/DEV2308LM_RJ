import React from 'react'

function ItemWishlist(item, onDeleteWishlist) {
    const handleDelete = (product) => {
        onDeleteWishlist(product);
    };
    return (
        <>
            <div className="box-item-wishlist w-100 d-flex justify-content-around my-3">
                <div className="image-item-wishlist margin-auto">
                    <img className="w-100" src={item.product.image} alt="" />
                </div>
                <div className="title-item-wishlist margin-auto">
                    <h5>{item.product.title}</h5>
                </div>
                <div className="del-wishlist margin-auto">
                    <button
                        type="button"
                        className="btn-del btn"
                        onClick={() => handleDelete(item.product)}
                    >
                        <span>
                            <i className="fa-regular fa-heart" />
                        </span>
                        <span>
                            <i class="fa-solid fa-heart"></i>
                        </span>
                    </button>
                </div>

            </div></>
    )
}

export default ItemWishlist