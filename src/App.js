import "./App.css";
import { useState } from "react";
import { Task } from "./Task";
import logo from "./saqathon.jpeg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [task, ...todoList] : todoList);
  };

  const deleteTask = () => {
    todoList.pop();
    setTodoList([...todoList]);
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <h1 className="queue"> QUEUE </h1>
        <img src={logo} alt="saqathon-img" />
        <div className="taskbox">
          <input
            className="text"
            placeholder="Enter Item"
            onChange={handleChange}
          />
          <button className="enqueue" onClick={addTask}>
            ENQUEUE
          </button>
          <button className="dequeue" onClick={deleteTask}>
            DEQUEUE
          </button>
        </div>
        <div className="list">
          {todoList.map((task) => {
            return (
              <Task
                taskName={task.taskName}
                id={task.id}
                completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
