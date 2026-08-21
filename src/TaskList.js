import React, { useState } from "react";

function TaskList({ tasks, deleteTask, toggleStatus, editTask }) {
  const [editingId, setEditingId] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({});

  const handleEdit = (task) => {
    setEditingId(task.id);
    setUpdatedTask(task);
  };

  const handleSave = () => {
    editTask(editingId, updatedTask);
    setEditingId(null);
  };

  return (
    <div className="row">
      {tasks.map((task) => (
        <div className="col-md-4 mb-3" key={task.id}>
          <div className="card">
            <div className="card-body">
              {editingId === task.id ? (
                <>
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={updatedTask.title}
                    onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={updatedTask.subject}
                    onChange={(e) => setUpdatedTask({ ...updatedTask, subject: e.target.value })}
                  />
                  <input
                    type="date"
                    className="form-control mb-2"
                    value={updatedTask.deadline}
                    onChange={(e) => setUpdatedTask({ ...updatedTask, deadline: e.target.value })}
                  />
                  <select
                    className="form-control mb-2"
                    value={updatedTask.priority}
                    onChange={(e) => setUpdatedTask({ ...updatedTask, priority: e.target.value })}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                  <button className="btn btn-success btn-sm me-2" onClick={handleSave}>
                    Save
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setEditingId(null)}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">
                    Subject: {task.subject} <br />
                    Deadline: {task.deadline} <br />
                    Priority: {task.priority} <br />
                    Status: {task.status}
                  </p>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => toggleStatus(task.id)}
                  >
                    {task.status === "Pending" ? "Mark Completed" : "Mark Pending"}
                  </button>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
