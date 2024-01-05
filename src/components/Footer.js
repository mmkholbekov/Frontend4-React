import React from "react";
import '../css/todo.css'

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 VIP Motors. Все права защищены.</p>
    </footer>
  )
};

export default Footer;



//        Footer.js
// import React from 'react';
// import { useState } from "react";
// import AddTodo from "./Section";
// import TaskList from "./TaskList";
//
// let nextId = 3;
// const initialTodos = [
//     {id: 0, title: "Buy car", done: true}
// ]
//
// export default function TaskApp() {
//     const [todos, setTodos] = useState(initialTodos)
//
//     function handleAddTodo(title) {
//         setTodos([
//             ...todos,
//             {
//                 id: nextId++,
//                 title: title,
//                 done: false
//             }
//         ])
//     }
//     function handleChangeTodos(nextTodo) {
//         setTodos(todos.map(t => {
//             if (t.id === nextTodo.id) {
//                 return nextTodo
//             } else {
//                 return t
//             }
//         }))
//     }
//     function handleDeleteTodo(todoId) {
//         setTodos(todos.filter((t) => t.id !== todoId))
//     }
//     return (
//     <>
//         <AddTodo onAddTodo={handleAddTodo}/>
//         <TaskList todos={todos} onChangeTodo={handleChangeTodos} onDeleteTodo={handleDeleteTodo}/>
//     </>
// )
// }