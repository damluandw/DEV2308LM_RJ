import React, { memo, useEffect, useRef, useState } from "react";
import data from "../datas/data";

function InsertCategories() {
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [category, setCategory] = useState({});
  const idRef = useRef();
  // const handleSubmit = () => {
  //   const frmdetails = {
  //     id: id,
  //     title: title,
  //     icon: icon,
  //     metaDescription: metaDescription,
  //   };
  //   setCategory(frmdetails);
  //   // list.push(category)
  //   // setList(...list, category);
  //   console.log(category)
  //   // data = list;
  // };
  const handleSubmit = () => {
    setCategory({
      id: id,
      title: title,
      icon: icon,
      metaDescription: metaDescription,
    });
    // list.push(category)
    // setList(...list, category);

    // data = list;
  };
  return (
    <div>
      <h2>Thêm mới Category</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input
            type="text"
            className="form-control"
            ref={idRef}
            value={id}
            onChange={(item) => setID(item.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tilte</label>
          <input
            value={title}
            onChange={(item) => setTitle(item.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Icon</label>
          <input
            value={icon}
            onChange={(item) => setIcon(item.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Meta data</label>
          <input
            value={metaDescription}
            onChange={(item) => setMetaDescription(item.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <div>
          {category.id} - {category.title} - {category.icon} -{" "}
          {category.metaDescription}
        </div>
      </form>
    </div>
  );
}

export default InsertCategories;
