import React, { useState } from "react";

function Game() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Finish project", completed: true },
  ]);



  const [newTask, setNewTask] = useState("");

  
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newId = Math.max(...tasks.map((task) => task.id), 0) + 1;
      const newTaskItem = { id: newId, title: newTask, completed: false };
      setTasks([...tasks, newTaskItem]);
      setNewTask("");
    }
  }

  const handleEditTask = (taskId, newTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
  }

  //function delete task
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  
  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleEditTask(task.id, task.title, !task.completed)}
            />
            {task.title}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Game;
