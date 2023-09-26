import React from "react";
import Search from "./Search";
import Sort from "./Sort";
import Add from "./Add";

function Control() {
  return (
    <>
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <div className="row">
        <Search />
        <Sort />
        <Add />
      </div>
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
    </>
  );
}

export default Control;
