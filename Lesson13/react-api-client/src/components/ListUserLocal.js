import axios from '../api/api-server-online';
import React,{useEffect, useState} from 'react'

function ListUserLocal() {
    const [listUsers, setListUsers]= useState([])
    //Lấy dữ liệu từ api local
    const getAllUsers = async() =>{
        let response = await axios.get("users");
        // console.log("Object api user:", response);
        // console.log("Data api user :", response.data);
        setListUsers(response.data);
    }
    useEffect(() => {
        getAllUsers();
    }, [])
    
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
                    </tr>
                </thead>
                <tbody>
                    {
                        listUsers.map((item,index)=>{
                            return <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.password}</td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ListUserLocal