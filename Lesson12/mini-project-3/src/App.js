import { React, useEffect, useState } from "react";
import Title from "./components/Title";
import Control from "./components/Control";
import Form from "./components/Form";
import ListTask from "./components/ListTask";

function App() {
  const [toggle, setToggle] = useState(false);
  // khởi tạo dữ liệu
  const listTaskInit = [
    {
      taskId: 1,
      taskName: "Lorem ipsum dolor sit amet,  Reiciendis ea a",
      level: 1,
    },
    {
      taskId: 2,
      taskName: "Lorem ipsum dolor sit amet,  Reiciendis ea b",
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
  // const [tasks, setTasks] = useState(listTaskInit);
  // lưu trữ dữ liệu bằng useState
  const [tasks, setTasks] = useState(() => {
    // có thể đọc dữ liệu từ localStorage hoặc api
    const list = JSON.parse(localStorage.getItem("DEV2308LMJS_TASKS"));
    if (list === null) {
      return listTaskInit;
    } else return list;
  });
  const [taskShow, setTaskShow] = useState(tasks); //state task Show List

  // khi tasks thay đổi thì cập nhập localStorage
  useEffect(() => {
    localStorage.setItem("DEV2308LMJS_TASKS", JSON.stringify(tasks));
    setTaskShow(tasks);
  }, [tasks]);
  // kHi người dùng click vào nút addTask trên compont COntrol / hoặc edit trên task
  // task add/edit
  let initTask = {
    taskId: 0,
    taskName: "",
    level: 2,
  };
  const [task, setTask] = useState(initTask); //state của form

  // trạng thía hiện thị giá trị trên nút submit của form: save(add)/ update (edit)
  const [actionName, setActionName] = useState("Save"); //state của form
  //Hàm xử lý sự kiện cho Add/Edit
  const handleAddOrEditTask = (toggle, actionName, task) => {
    setToggle(toggle);
    setActionName(actionName);
    if (task === null) {
      setTask(initTask);
    } else {
      setTask(task);
      // xử lý thêm mới
      if (actionName === "Save") {
        console.log(task);
        //thêm
        setTasks((pre) => {
          //tạo taskId tự động
          pre.sort((x, y) => {
            return x.taskId - y.taskId;
          });
          let id = pre.length <= 0 ? 1 : pre[pre.length - 1].taskId + 1;
          // console.log("taskIdAdd ", taskIdAdd);
          const taskAdd = {
            taskId: id,
            taskName: task.taskName,
            level: task.level,
          };
          return [...pre, taskAdd];
        });
      } else if (actionName === "Update") {
        //sửa
        setTasks((pre) => {
          for (let i = 0; i < pre.length; i++) {
            if (pre[i].taskId === task.taskId) {
              pre[i] = task;
              break;
            }
          }
          return [...pre];
        });
      }
    }
  };
  //hàm xử lý sự kiện cancel
  const handleCancel = (toggle) => {
    setToggle(toggle);
  };
  //Xử lý chức năng Edit => bắt đầu từ componentTask
  const handleDelete = (task) => {
    setTasks((pre) => {
      pre = pre.filter((x) => x.taskId != task.taskId);
      return [...pre];
    });
  };
  const [search, setSearch] = useState("");
  //xử lý chức năng search
  const handleSearch = (keyWord) => {
    setSearch(keyWord);
    let listTask = tasks;
    if (keyWord !== "") {
      listTask = listTask.filter((x) =>
        x.taskName
          .toLocaleLowerCase()
          .trim()
          .includes(keyWord.toLocaleLowerCase().trim())
      );
      setTaskShow(listTask);
    } else {
      setTaskShow(tasks);
    }
  };

  const [sort, setSort] = useState("Name ASC");
  const handleSort = (keySort) => {
    setSort(keySort);

    if (keySort !== "") {
      let arr = keySort.split("-");
      if (arr[0] === "Name") {
        if (arr[1] === "ASC") {
          taskShow.sort((x, y) => x.taskName.localeCompare(y.taskName));
        } else {
          taskShow.sort((x, y) => y.taskName.localeCompare(x.taskName));
        }
      } else {
        if (arr[1] === "ASC") {
          taskShow.sort((x, y) => {
            return x.level - y.level;
          });
        } else {
          taskShow.sort((x, y) => {
            return y.level - x.level;
          });
        }
      }
    }
  };
  let elementForm =
    toggle === true ? (
      <Form
        onCancel={handleCancel}
        onsubmit={handleAddOrEditTask}
        renderTask={task}
        actionName={actionName}
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
      <Control
        onAddTask={handleAddOrEditTask}
        onSearch={handleSearch}
        onSort={handleSort}
      />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {elementForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask
        renderTasks={taskShow}
        onEdit={handleAddOrEditTask}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
