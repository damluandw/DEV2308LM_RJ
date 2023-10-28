import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ListProductByCategory({ category, listProduct }) {
    const [list, setList] = useState([]);

    useEffect(() => {
        let listTemp = listProduct;
        let list1 = listTemp.filter((x) => x.cid == category.id);
        setList(list1);
    }, [category]);

    useEffect(() => {
        let listTemp = listProduct;
        let list1 = listTemp.filter((x) => x.cid == category.id);
        setList(list1);
    }, []);
    let render = list.map((item, index) => {
        let img = "../" + item.image
        return (
            <div index={index} className="item-product col-lg-3">
                <div className="img-product">
                    <img
                        className="w-100"
                        src={img}
                        alt={img}
                    />
                </div>
                <div className="product-info text-center">
                    <Link to={`/products/propduct-detail/${item.id}`}>
                        <h4>{item.title}</h4>
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
                        {item.priceNew}
                        <span>VNĐ</span>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <section id="products">
            <div className="products">
                <div className="container">
                    <div className="d-flex justify-content-start">
                        <h3>{category.title}</h3>
                    </div>
                    <div className="list-product row">
                        {render}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ListProductByCategory