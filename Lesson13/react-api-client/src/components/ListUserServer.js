import axios from '../api/api-server-online';
import React, { useEffect, useState } from 'react'

function ListUserServer({onEdit,user}) {
    const [listUsers, setListUsers] = useState([])
    //Lấy dữ liệu từ api local
    const getAllUsers = async () => {
        let response = await axios.get("users");
        console.log("Object api user:", response);
        console.log("Data api user :", response.data);
        setListUsers(response.data);
    }
    useEffect(() => {
        getAllUsers();
    }, [])
    const handleEdit = (item) =>{
        onEdit(item);
    }
    useEffect(() => {
        getAllUsers();
    }, [user])
    return (
        <div>
            <h1>Danh sách users </h1>
            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>userName</th>
                        <th>passwword</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUsers.map((item, index) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.userName}</td>
                                <td>{item.password}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={()=>handleEdit(item)}>Edit</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ListUserServer