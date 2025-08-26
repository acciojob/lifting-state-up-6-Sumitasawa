import React from 'react'

const TodoList = ({ todos, handleComplete }) => {
  return (
   <div>
    <ul>
     <h2>Child Component</h2>
      {todos.map((todo) =>{ return  (
        <li key={todo.id}>
         <p> {todo.text}</p>
          {!todo.completed &&  <button onClick={() => handleComplete(todo.id)}  >Completed</button>}
        </li>
      )})}
    </ul>
   </div>
  );
}

export default TodoList
