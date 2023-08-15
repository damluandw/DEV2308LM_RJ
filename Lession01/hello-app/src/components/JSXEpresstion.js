import React from "react";

function JSXEpresstion() {
  const user = {
    name: "Dam Luan",
    age: 27,
  };
  const name = "Dev";
  const formatName = (user) => {
    return (
      <h2>
        Xin chào: {user.name} - Tuổi {user.age}
      </h2>
    );
  };
  const elemet = (
    <>
      <h1>Xin chào Devmaster</h1>
      <hr />
      <p>Hà Nội mùa thu </p>
    </>
  );
  return (
    <div>
      <h1>This is a JSXEpresstion</h1>
      <p>
        Hello {user.name} - Age : {user.age}
      </p>
      <p> Name is {name}</p>
      <hr />
      {formatName(user)}
      {elemet}
      <hr />
    </div>
  );
}

export default JSXEpresstion;
