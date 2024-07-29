import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/tasksSlice";
import {
  Button,
  ListGroup,
  FormControl,
  InputGroup,
  Modal,
} from "react-bootstrap";

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
    <div>
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <span>{task}</span>
            <div>
              <Button
                variant="secondary"
                onClick={() => handleEditTask(index)}
                className="me-2"
              >
                Edit
              </Button>
              <Button variant="danger" onClick={() => handleDeleteTask(index)}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Modal show={isEditing} onHide={() => setIsEditing(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <FormControl
              value={currentTask}
              onChange={(e) => setCurrentTask(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TaskList;
