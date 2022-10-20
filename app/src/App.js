import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';
import photo from './todo.png';

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

  const divStyle = {
    color: 'blue',
    backgroundImage: {photo},
  };


  return (
    <div container className='cont'>
        <div row style={divStyle}className='row'>
          <div col-6 className="section1'">
            <img className="cookies"
            src={photo} 
            alt= {''} 
            />
                <div className= "section2">
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
          </div>
        </div>
      </div>
  
  );
}