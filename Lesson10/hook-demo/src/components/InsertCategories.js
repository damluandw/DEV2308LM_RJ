import React, { memo, useState } from "react";

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
  const [list, setList] = useState([]);
//   useEffect(() => {
//     setList(data);
//     console.log(list);
//   });
  const [category, setCategory] = useState({id:0,title:"",icon:"",metaDescription:""});
  // useEffect(() => {
  //     setCategory(
  //         category.id =
  //     )
  //     console.log(category)
  // }, [])

//   const handleChange =(item)  =>{
//     let name =  item.target.name;
//     let value =  item.target.value
//       setCategory(
        
//       )
//   }
  return (
    <div>
      <h2>Thêm mới Category</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input
            type="text"
            className="form-control"
            value={(item) => setCategory((category.id = item.target.value))}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tilte</label>
          <input
            value={(item) => setCategory((category.title = item.target.value))}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Icon</label>
          <input
            value={(item) => setCategory((category.icon = item.target.value))}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Meta data</label>
          <input
            value={(item) => setCategory((category.metaDescription = item.target.value))}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default InsertCategories;
