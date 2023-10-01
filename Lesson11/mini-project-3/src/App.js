import { React, useState } from "react";
import Title from "./components/Title";
import Control from "./components/Control";
import Form from "./components/Form";
import ListTask from "./components/ListTask";

function App() {
  // khởi tạo dữ liệu
  const listTaskInit = [
    {
      taskId: 1,
      taskName: "Lorem ipsum dolor sit amet,  Reiciendis ea a",
      level: 1,
    },
    {
      taskId: 2,
      taskName: "Lorem ipsum dolor sit amet, Reiciendis ea b",
      level: 2,
    },
    {
      taskId: 3,
      taskName: "Lorem ipsum dolor sit amet,  Reiciendis ea c",
      level: 3,
    },
    {
      taskId: 4,
      taskName: "Lorem ipsum dolor sit amet,  Reiciendis ea d",
      level: 1,
    },
  ];
  // lưu trữ dữ liệu bằng useState
  const [tasks, setTanks] = useState(() => {
    // có thể đọc dữ liệu từ localStorage hoặc api
    return listTaskInit;
  });
  const [toggle, setToggle] = useState(false) ;
  let elementForm = (toggle===true)?  <Form/>:"";
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {elementForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask renderTasks = {tasks}/>
    </div>
  );
}

export default App;
