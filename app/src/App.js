import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 4;
const initialTodos = [
  { id: 0, title: 'Get rid of initial todos', done: false },
  { id: 1, title: 'Use local storage', done: false },
  { id: 2, title: 'Number of tasks', done: true },
  { id: 3, title: 'Add bootstrap', done: true },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
    );

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ])
    localStorage.setItem('id', 'title');
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

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
    localStorage.removeItem('id', 'title');
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