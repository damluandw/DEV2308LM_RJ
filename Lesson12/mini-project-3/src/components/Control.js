import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Control({ onAddTask,onSearch }) {
  //hàm xử lý sự kiện khi người dùng click vào nút add task
  const handleAdd = () => {
    onAddTask(true, "Save",null);
  }
  const [search,setSearch] =useState('');
  const [sort,setSort] =useState('Name ASC');
  
  const handleSearch =()=>{
    onSearch(search);
  }

  const handleClick = (evt) =>{
    evt.preventDefault();
    console.log("ev:",sort);
    setSort(evt.target.value);
  }
  useEffect(()=>{
    console.log("sort:",sort);
  },[sort])
  return (
    <div className="row">
      {/* SEARCH : START */}
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            // ref="search"
            placeholder="Search for..."
            name="search"
            value={search}
            onChange={(evt)=>setSearch(evt.target.value)}
          />
          <span className="input-group-btn">
            <button className="btn btn-info" type="button"
            onClick={handleSearch}>
              Go!
            </button>
          </span>
        </div>
      </div>
      {/* SEARCH : END */}
      {/* SORT : START */}
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort by <span className="caret" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" >
            <li>
              <a role="button" value ="Name-ASC" onClick={handleClick}>Name ASC</a>
            </li>
            <li>
              <a role="button"  value ="Name-DESC" onClick={(evt)=>setSort(evt.target.value)}>Name DESC</a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a role="button"  value ="Level-ASC" onClick={(evt)=>setSort(evt.target.value)}>Level ASC</a>
            </li>
            <li>
              <a role="button" value ="Level-DESC" onClick={(evt)=>setSort(evt.target.value)}>Level DESC</a>
            </li>
          </ul>
          <span className="label label-success label-medium">{sort}</span>
        </div>
      </div>
      {/* SORT : END */}
      {/* ADD : START */}
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button" className="btn btn-info btn-block"
          onClick={handleAdd}>
          Add Task
        </button>
      </div>
      {/* ADD : END */}
    </div>
  );
}

export default Control;
