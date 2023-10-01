import React, { useEffect, useState } from "react";

function Form({ onCancelForm, renderTask, onSubmit }) {
  const initTask = {
    taskId: 0,
    taskName: "",
    level: 3,
  };

  const [task, setTask] = useState(initTask);

  if (renderTask != null) {
    setTask(renderTask);
  }

  const handleChange = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    if (name == "level") {
      value = parseInt(value);
    }
    setTask((task) => {
      return {
        ...task,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    console.log("task ev:", task);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(task);
  };

  const handleCancelForm = () => {
    onCancelForm(false);
  };

  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form
          action=""
          method="POST"
          className="form-inline"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              name="taskName"
              value={task.taskName || ""}
              onChange={handleChange}
              // ref="task_name"
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <select
              name="level"
              value={task.level || 3}
              onChange={handleChange}
              id="inputDs"
              className="form-control"
              required="required"
              // ref="task_level"
            >
              <option value={3}>Small</option>
              <option value={2}>Medium</option>
              <option value={1}>High</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={handleCancelForm}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
