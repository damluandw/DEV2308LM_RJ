import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListProduct from "./components/ListProduct";
import Form from "./components/Form";
import Control from "./components/Control";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          productId: "P001",
          productName: "IPhone 11",
          quantity: 15,
          price: 1000,
        },
        {
          productId: "P002",
          productName: "IPhone 12",
          quantity: 20,
          price: 1250,
        },
        {
          productId: "P003",
          productName: "IPhone 13",
          quantity: 10,
          price: 1500,
        },
        {
          productId: "P004",
          productName: "IPhone 14",
          quantity: 15,
          price: 2000,
        },
      ],
      isToggle: false,
      product: {},
      actionName: "",
      keySearch: "",
      sortBy: "",
    };
  }
  handleAddOrEditView = (toggle, product, actionName) => {
    this.setState({
      product: product,
      actionName: actionName,
      isToggle: toggle,
    });
  };
  handleAdd = (toggle, actionName) => {
    console.log(actionName);
    this.setState({
      product: {},
      actionName: actionName,
      isToggle: toggle,
    });
  };
  handleSubmit = (toggle, product) => {
    this.setState({
      isToggle: toggle,
    });
    console.log(product);
    if (this.state.actionName === "Update") {
      // sửa
      let { products } = this.state;
      for (let i = 0; i < products.length; i++) {
        if (products[i].productId === product.productId) {
          products[i] = product;
          break;
        }
      }
      this.setState({
        products: products,
      });
    }
  };
  handleDelete = (product) => {
    let { products } = this.state;
    products = products.filter((x) => x.productId != product.productId);
    this.setState({
      products: products,
    });
  };
  handleSearch = (keyWord) => {
    this.setState({
      keySearch: keyWord,
    });
  };
  handleSort = (sortBy) => {
    console.log(sortBy);
    this.setState({
      sortBy: sortBy,
    });
  };
  render() {
    let { products, keySearch, sortBy } = this.state;
    // console.log("App:", this.state.products);
    let elementForm =
      this.state.isToggle === true ? (
        <Form
          renderActionName={this.state.actionName}
          renderProduct={this.state.product}
          onSubmit={this.handleSubmit}
        />
      ) : (
        ""
      );
    if (keySearch !== "") {
      products = products.filter((x) =>
        x.productName
          .toLocaleLowerCase()
          .includes(keySearch.toLocaleLowerCase())
      );
    }
    if (sortBy != "") {
      let arr = sortBy.split("-");
      if (arr[0] === "Name") {
        if (arr[1] === "ASC") {
          products.sort((x, y) => x.productName.localeCompare(y.productName));
        } else {
          products.sort((x, y) => y.productName.localeCompare(x.productName));
        }
      } else {
        if (arr[1] === "ASC") {
          products.sort((x, y) => {
            return x.price - y.price;
          });
        } else {
          products.sort((x, y) => {
            return y.price - x.price;
          });
        }
      }
    }
    return (
      <div>
        <Header />
        <section className="row">
          <Control
            onAddOrEditView={this.handleAdd}
            onSearch={this.handleSearch}
            onSort={this.handleSort}
          />
          <ListProduct
            renderProducts={products}
            onViewOrEdit={this.handleAddOrEditView}
            onDelete={this.handleDelete}
          />
          {elementForm}
        </section>
        <Footer />
      </div>
    );
  }
}
