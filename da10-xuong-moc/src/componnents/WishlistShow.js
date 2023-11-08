import React from 'react'
import ItemWishlistShow from './ItemWishlistShow';

function WishlistShow({ wishlist, onDelete }) {
    const handleDelete = (product) => {
      onDelete(product);
    };
  
    let render = wishlist.map((item, index) => {
      return (
        <ItemWishlistShow
          key={item.id}
          render={item}
          rollNo={index + 1}
          onDelete={handleDelete}
        />
      );
    });
    return (
      <>
        <div id="wish-modal">
          <div
            className="modal fade"
            id="staticBackdropWishlist"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Danh sách yêu thích
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body" />
                {render}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default WishlistShow