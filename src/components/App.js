import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const todoList = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build React App", completed: false },
    { id: 3, text: "Deploy the React App", completed: false },
  ];

const App = () => {
  const [todos, setTodos] = useState(todoList);

  // Mark a todo as complete
  const handleComplete = (id) => {
   const list = todos.map(todo => todo.id === id ? {...todo, completed:true} : todo);
   setTodos(list);
  };

  return (
    <div className="App">
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
