import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Form({ onCancel, renderTask, actionName, onsubmit }) {
  //hàm xử lý sự kiện cancel trên form
  const handleCancel = () => {
    onCancel(false)
  }
  // quản lý state in form
  const [task, setTask] = useState(renderTask);
  //change in Control -> update state
  const handeChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    if (name === "level")
      value = parseInt(value)
    setTask(task => {
      return {
        ...task,
        [name]: value
      }
    }

    );
  }

  // Khi componet Form đã mounting, khi dữ liệu renderTask thay đổi
  //-> cập nhật lại task
  useEffect(() => { setTask(renderTask) }, [renderTask])

  // hàm xử lý sự kiện Submit Form
  const handleSubmit = () => {
    onsubmit(false, actionName, task);
  }

  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form action="" method="POST" className="form-inline">
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              name="taskName"
              value={task.taskName || ''}
              onChange={handeChange}
            // ref="task_name"
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <select
              name="level"
              id="inputDs"
              className="form-control"
              required="required"
              value={task.level || 2}
              onChange={handeChange}
            // ref="task_level"
            >

              <option value={1}>Small</option>
              <option value={2}>Medium</option>
              <option value={3}>High</option>
            </select>
          </div>
          <button type="button" className="btn btn-primary"
            onClick={handleSubmit}>
            {actionName}
          </button>
          <button type="button" className="btn btn-default"
            onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
