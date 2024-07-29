import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { Button, InputGroup, FormControl } from "react-bootstrap";

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
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="primary" onClick={handleAddTask}>
        Add Task
      </Button>
    </InputGroup>
  );
};

export default TaskInput;
