import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ItemProduct from "./ItemProduct";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function ListProductByCategory({
  category,
  listProduct,
  onBuyProduct,
  onWishlist,
  pageSize,
  filterPrice,
  filterOrder,
}) {
  const [list, setList] = useState([]);
  let query = useQuery();
  const getListPage = (list, pageIndex) => {
    if (list != undefined) {
      let count = list.length;
      let start = (pageIndex - 1) * pageSize;
      let end = pageIndex * pageSize;
      let listTmp = [];
      // $('.product-page-conten .list-Products').html('');
      for (let i = start; i < end && i < count; i++) {
        let obj = list[i];
        listTmp.push(obj);
      }
      return listTmp;
    }
    return [];
  };
  const filter = (listProduct) => {
    let listTemp = listProduct;
    if (filterPrice == "5")
      listTemp = listTemp.filter(
        (x) => x.priceNew < parseInt(filterPrice) * 1000000
      );
    else if (filterPrice == "10") {
      listTemp = listTemp.filter(
        (x) => x.priceNew < parseInt(filterPrice) * 1000000
      );
      listTemp = listTemp.filter((x) => x.priceNew > 5 * 1000000);
    } else if (filterPrice == "15") {
      listTemp = listTemp.filter(
        (x) => x.priceNew < parseInt(filterPrice) * 1000000
      );
      listTemp = listTemp.filter((x) => x.priceNew > 10 * 1000000);
    } else if (filterPrice == "20") {
      listTemp = listTemp.filter((x) => x.priceNew > 20 * 1000000);
    }

    if (filterOrder == "price-asc")
      listTemp.sort((x, y) => {
        return x.priceNew - y.priceNew;
      });
    else if (filterOrder == "price-desc") {
      listTemp.sort((x, y) => {
        return y.priceNew - x.priceNew;
      });
    } else if (filterOrder == "new") {
      listTemp.sort((x, y) => {
        return x.createdDate - y.createdDate;
      });
    }
    // console.log(listTemp);
    return listTemp;
  };

  const getList = () => {
    let listTemp = listProduct;
    let list1 = listTemp.filter((x) => x.cid == category.id);
    list1 = filter(list1);
    let pageIndex = query.get("page");
    list1 = getListPage(list1, pageIndex);
    setList(list1);
  };
  useEffect(() => {
    getList();
  }, [filterPrice]);
  useEffect(() => {
    getList();
  }, [filterOrder]);

  useEffect(() => {
    getList();
  }, [category]);

  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    getList();
  }, [query]);

  let handleBuy = (product) => {
    onBuyProduct(product);
  };
  let handleWishlist = (product) => {
    onWishlist(product);
  };
  let render = list.map((item, index) => {
    return (
      <ItemProduct
        key={item.id}
        renderProduct={item}
        rollNo={index + 1}
        onBuyProduct={handleBuy}
        onWishlist={handleWishlist}
      />
    );
  });

  return (
    <section id="products">
      <div className="products">
        <div className="container">
          <div className="d-flex justify-content-start">
            <h3>{category.title}</h3>
          </div>
          <div className="list-product row">{render}</div>
        </div>
      </div>
    </section>
  );
}

export default ListProductByCategory;
