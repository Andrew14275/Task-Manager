import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    title: "",
    subject: "",
    deadline: "",
    priority: "Low",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.subject || !task.deadline) {
      alert("All fields are required!");
      return;
    }
    addTask({ ...task, id: Date.now(), status: "Pending" });
    setTask({ title: "", subject: "", deadline: "", priority: "Low" });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4">
      <input
        type="text"
        placeholder="Task Title"
        className="form-control mb-2"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Subject"
        className="form-control mb-2"
        value={task.subject}
        onChange={(e) => setTask({ ...task, subject: e.target.value })}
      />
      <input
        type="date"
        className="form-control mb-2"
        value={task.deadline}
        onChange={(e) => setTask({ ...task, deadline: e.target.value })}
      />
      <select
        className="form-control mb-2"
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;
