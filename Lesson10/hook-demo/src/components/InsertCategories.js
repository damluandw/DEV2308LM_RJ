import React, { memo, useEffect, useRef, useState } from "react";
import data from "../datas/data";

function InsertCategories() {
  // const item = {
  //     "id": 0,
  //     "title": "",
  //     "icon": "/Content/Uploads/images/danh-muc/icon-do-trang-tri.png",
  //     "mateTitle": null,
  //     "metaKeyword": "nội thất trang trí",
  //     "metaDescription": "Xưởng mộc hoàng hoan chuyên thi công nội thất trang trí với hơn 2000 mẫu mã sản phẩm thiết kế đa dạng. Được sản xuất trực tiếp tại xưởng các sản phẩm nội thất trang trí sẽ được bảo hành 1 năm và chi phí rẻ nhất.",
  //     "slug": "trang-tri",
  //     "orders": 8,
  //     "parentid": null,
  //     "createdDate": "2020-08-07T09:06:19.113",
  //     "updatedDate": "2020-08-07T09:06:19.113",
  //     "adminCreated": null,
  //     "adminUpdated": null,
  //     "notes": null,
  //     "status": 1,
  //     "isdelete": null
  // }
  // const [list, setList] = useState([]);
  // useEffect(() => {
  //   setList(data);
  // }, []);
  // const list = useRef;
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [category, setCategory] = useState({});
  const handleSubmit = () => {
    const frmdetails = {
      id: id,
      title: title,
      icon: icon,
      metaDescription: metaDescription,
    };
    setCategory(category,frmdetails);
    // list.push(category)
    // setList(...list, category);
    // console.log(list)
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
            onChange={(item) => setID(item.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tilte</label>
          <input
            onChange={(item) => setTitle(item.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Icon</label>
          <input
            onChange={(item) => setIcon(item.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Meta data</label>
          <input
            onChange={(item) => setMetaDescription(item.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default InsertCategories;
