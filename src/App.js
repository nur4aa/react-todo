import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";

function App() {
  const [
    todos,
    setTodos,
  ] /*деструктуризация массива, (1)-state(измен)  */ = React.useState([
    { id: 1, completed: false, title: "buy Bread" },
    { id: 2, completed: false, title: "buy Cola" },
    { id: 3, completed: false, title: "buy Milk" },
  ]); //задача начального состояния | всегда возвращает 2 элементов | 1(СОСТОЯНИЕ) 2(ФУНКЦИЯ) ПОЗВОЛЯЮЩАЯ ИЗМЕНЯТЬ ДАННОЕ СОСТОЯНИЕ ДЛЯ ТОГО ЧТОБЫ РЕКАКТ ВИДЕЛ ЭТИ ИЗМЕНЕНИЯ

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React todo-List</h1>
        <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
      </div>
    </Context.Provider>
  );
}

export default App;
// here
