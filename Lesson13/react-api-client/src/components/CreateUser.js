import axios from '../api/api-server-online'
import React, { useState } from 'react'

function CreateUser() {
    const [userName, setUserName] = useState('')
    const [password, setPassworđ] = useState('')
    //hàm xử lý sự kiện thêm mới user
    const handleCreateUser = async () => {
        
        //Cách 1
        // await axios.post("users", { userName, password })
        //cách 2
        let users ={
            userName :userName,
            password : password
        }
        await axios.post("users", users)
    }
    return (
        <div className='form'>
            <h1>
                Thêm mới user
            </h1>
            <hr />
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                    UserName
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    name="userName"
                    value={userName}
                    onChange={(evt) => { setUserName(evt.target.value) }}
                />

            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                    Password
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="addon-wrapping"
                    value={password}
                    onChange={(evt) => { setPassworđ(evt.target.value) }}
                />

            </div>
            <button className='btn btn-primary' onClick={handleCreateUser}>CreateUser</button>
        </div>
    )
}

export default CreateUser