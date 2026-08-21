import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const toggleStatus = (id) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, status: t.status === "Pending" ? "Completed" : "Pending" } : t
      )
    );

  const editTask = (id, updatedTask) =>
    setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div>
      <Navbar setFilter={setFilter} />
      <div className="container mt-4">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleStatus={toggleStatus}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;
