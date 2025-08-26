import React from 'react'

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            margin: "10px 0",
            fontSize: "18px",
          }}
        >
          {todo.text}
          {!todo.completed && (
            <button
              onClick={() => handleComplete(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList
