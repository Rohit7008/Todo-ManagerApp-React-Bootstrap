import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/tasksSlice";
import "./TaskList.css"; // Add this line for custom styles

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEditTask = (index) => {
    setIsEditing(true);
    setCurrentTask(tasks[index]);
    setCurrentIndex(index);
  };

  const handleUpdateTask = () => {
    dispatch(editTask({ index: currentIndex, newTask: currentTask }));
    setIsEditing(false);
    setCurrentTask("");
  };

  return (
    <div className="task-list-container">
      {tasks.map((task, index) => (
        <div key={index} className="task-list-item">
          <span>{task}</span>
          <div className="task-list-item-actions">
            <button
              onClick={() => handleEditTask(index)}
              className="task-list-edit-button"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteTask(index)}
              className="task-list-delete-button"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {isEditing && (
        <div className="task-list-edit-modal">
          <input
            type="text"
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
            className="task-list-edit-input"
          />
          <button
            onClick={handleUpdateTask}
            className="task-list-update-button"
          >
            Update Task
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
