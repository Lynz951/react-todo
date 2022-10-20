import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 0;

export default function TaskApp() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      } 
    ]) 
    localStorage.setItem((nextId), (title));
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId, title) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
    localStorage.removeItem((todoId), (title)); //won't remove first time clicked
  }

  return (
    <div className='todoapp'>
        <h1>Lindsay's Two Dews</h1>
        <AddTodo
            onAddTodo={handleAddTodo}
        />
        <TaskList
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}
        />
        <h5>You have {todos.length} tasks left two dew!</h5>
    </div>
  );
}