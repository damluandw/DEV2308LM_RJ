import React, { memo,  useState } from 'react'

function InsertCategories() {
    // const item = {
    //     "id": 20,
    //     "title": "TRANG TRÍ",
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
    // const [category, setCategory] = useState([]);
    // useEffect(() => {
    //     setCategory(item)
    // }, [])


    // const handleChange =()  =>{
    //     setCategory()
    // }
    return (
        <div>
            <h2>Thêm mới Category</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">
                        ID
                    </label>
                    <input
                        type="text"
                        className="form-control"

                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Tilte
                    </label>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Meta data
                    </label>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
                {/* <button type="submit" className="btn btn-primary" onClick={onAddCategory(category)}>
                    Submit
                </button > */}
            </form>

        </div>
    )
}

export default InsertCategories