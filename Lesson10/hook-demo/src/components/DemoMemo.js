import React, { useMemo, useRef, useState } from "react";

function DemoMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();
  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name: name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("tính toan lai");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div className="alert alert-success">
      <input
        className=" m-2"
        type="text"
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhap name"
      />
      <br />
      <input
        className=" m-2"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Nhap price"
      />
      <br />
      <button onClick={handleSubmit} className="btn  btn-primary m-2">
        Add
      </button>
      <br />
      Total: {total}
      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            {prod.name}-{prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DemoMemo;
