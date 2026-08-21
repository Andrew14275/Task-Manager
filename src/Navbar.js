import React from "react";

function Navbar({ setFilter }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Student Task Manager</span>
        <div>
          <button className="btn btn-outline-light mx-1" onClick={() => setFilter("All")}>
            All
          </button>
          <button className="btn btn-outline-light mx-1" onClick={() => setFilter("Pending")}>
            Pending
          </button>
          <button className="btn btn-outline-light mx-1" onClick={() => setFilter("Completed")}>
            Completed
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
