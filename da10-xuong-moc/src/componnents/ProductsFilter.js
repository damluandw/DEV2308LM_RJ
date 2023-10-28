import React from 'react'

function ProductsFilter() {
    return (
        <>
            <section id="product-filter">
                <div className="filter">
                    <div className="container">
                        <div className="d-flex justify-content-between">
                            <div className="filter-price d-flex">
                                <span>Chọn mức giá:</span>
                                <ul className="d-flex">
                                    <li className="cl-yellow">Dưới 5 triệu</li>
                                    <li className="cl-yellow">5-10 triệu</li>
                                    <li className="cl-yellow">10-15 triệu</li>
                                    <li className="cl-yellow">Trên 15 triệu</li>
                                </ul>
                            </div>
                            <div className="filter-sort">
                                <select className="form-select">
                                    <option value="new" selected="">
                                        Sắp xếp
                                    </option>
                                    <option value="new">Mới nhất</option>
                                    <option value="pho-bien">Phổ biến nhất</option>
                                    <option value="price-desc">Giá cao đến thấp</option>
                                    <option value="price-asc">Giá thấp đến cao</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsFilter