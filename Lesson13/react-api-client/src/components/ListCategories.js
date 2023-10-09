import axios from '../api/api-xm';
import React, { useEffect, useState } from 'react'

function ListCategories() {
    const [listCategories, setListCategories] = useState([])
    //Lấy dữ liệu từ api local
    const getAllCategories = async () => {
        let response = await axios.get("Categories");
        console.log("Object api user:", response);
        console.log("Data api user :", response.data);
        setListCategories(response.data);
    }
    //use Effect
    useEffect(() => {
        getAllCategories();
    }, [])
    return (
        <div>
            <h1>Danh sách Categories </h1>
            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>title</th>
                        <th>icon</th>
                        <th>metaDescription</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listCategories.map((item, index) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.icon}</td>
                                <td>{item.metaDescription}</td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ListCategories