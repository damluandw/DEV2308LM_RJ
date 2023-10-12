import axios from "../api/api-server-online";
import React, { useEffect, useState } from "react";

function EditUser_API({ user ,onUpdate}) {
  const [id, setID] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {    
    setID(user.id);
    console.log(user.id)
    getUser();
  }, [user]);

  const getUser = async () => {
    if(user.id != null || user.id != undefined){
        let response = await axios.get("users/" + user.id);
        setUserName(response.data.userName);
        setPassword(response.data.password);
    }
  };

  const handleEdit = async () => {
    let item = {
      id: id,
      userName: userName,
      password: password,
    };
    await axios.put("users/" + item.id, item);
    onUpdate(item);
    setID("");
    setUserName("");
    setPassword("");
  };
  return (
    <div className="form">
      <h1>Edit user API</h1>
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
          onChange={(evt) => {
            setUserName(evt.target.value);
          }}
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
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary" onClick={handleEdit}>
        Update
      </button>
    </div>
  );
}

export default EditUser_API;
