import React from "react";

function Task({ renderTask, rollNo, onEdit ,onDelete}) {
  let elementLevel = (<span className="label label-danger">High</span>);
  if (renderTask.level === 2) {
    elementLevel = (<span className="label label-info">Medium</span>);
  } else if (renderTask.level === 1) {
    elementLevel = (<span className="label label-default">Small</span>);
  }
  //hàm xử lý sự kiện edit
  const handleEdit = (task) => {
    onEdit(true, "Update", task);
  }
  // hàm xử lý sự kiện delete 
  const handleDelete = (task) =>{
    onDelete(task);
  }
  return (
    <>
      <tr>
        <td className="text-center">{rollNo}</td>
        <td>{renderTask.taskName}</td>
        <td className="text-center">{elementLevel}</td>
        <td>
          <button type="button" className="btn btn-warning"
            onClick={() => handleEdit(renderTask)}>
            Edit
          </button>
          <button type="button" className="btn btn-danger"
           onClick={() => handleDelete(renderTask)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Task;
