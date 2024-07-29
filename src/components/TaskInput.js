import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import "./TaskInput.css"; // Add this line for custom styles

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="task-input-field"
      />
      <button onClick={handleAddTask} className="task-input-button">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
