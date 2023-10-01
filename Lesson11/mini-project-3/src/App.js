import { React, useEffect, useState } from "react";
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
  // const [tasks, setTasks] = useState(listTaskInit);
  const [tasks, setTasks] = useState(() => {
    // có thể đọc dữ liệu từ localStorage hoặc api
    const list = JSON.parse(localStorage.getItem("DEV2308LMJS_TASKS"));
    if (list === null) {
      return listTaskInit;
    } else return list;
  });
  // khi tasks thay đổi thì cập nhập localStorage
  useEffect(() => {
    localStorage.setItem("DEV2308LMJS_TASKS", JSON.stringify(tasks));
  }, [tasks]);
  //task add, edit
  const [task, setTask] = useState({});

  const [isToggle, setToggle] = useState(false);

  //sự kiện add task
  const handleAddTask = (toggle) => {
    setToggle(toggle);
  };
  //sự kiện cancel form
  const handleCancel = () => {
    setToggle(false);
  };
  //sự kiện edit task
  const handleEditTask = (item, toggle) => {
    setToggle(toggle);
    setTask(item);
  };
  const handleSubmit = (task) => {
    console.log("add ", task);
    // xử lý thêm mới
    setTasks((pre) => {
      let taskIdAdd = pre.length <= 0 ? 1 : pre[pre.length - 1].taskId + 1;
      // console.log("taskIdAdd ", taskIdAdd);
      const taskAdd = {
        taskId: taskIdAdd,
        taskName: task.taskName,
        level: task.level,
      };
      return [...pre, taskAdd];
    });
  };
  //render Form
  let elementForm =
    isToggle === true ? (
      <Form
        onCancelForm={handleCancel}
        renderTask={task}
        onSubmit={handleSubmit}
      />
    ) : (
      ""
    );
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control onAddTask={handleAddTask} />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {elementForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask renderTasks={tasks} onEdit={handleEditTask} />
    </div>
  );
}

export default App;
