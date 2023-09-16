import "./App.css";
import Cart from "./componnets/Cart";
import ListProduct from "./componnets/ListProduct";
import Title from "./componnets/Title";

function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
        <ListProduct />
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
        <Cart />
        {/* CART : END */}
      </div>
    </div>
  );
}

export default App;
