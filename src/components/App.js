import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build React App", completed: false },
    { id: 3, text: "Deploy the React App", completed: false },
  ]);

  // Mark a todo as complete
  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Parent Component</h1>
      <h5>Child Component</h5>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
