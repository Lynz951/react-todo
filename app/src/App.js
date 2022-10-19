import React, { useState } from "react";


function App(props) {

//     const [ page, setPage] = useState('Home');
//     const [ data, setData] = useState([]);
        const [text, setText] = useState('');

    // const todoItem = [
    //     text=  (""),
    //     active= true,
    //     id= "1",
    //     ];

    function handleClick(text) {
        setText(text);}
    
    
    return (
      <div className="todoapp">
        <h1>Todo List</h1>
      

        <input
            placeholder = "Add task"
            value = {text}
            onChange = {e => setText(e.target.value)}
            />

        <button onClick={() => {
            setText('');
            dispatch
        }}>Add to list</button>

    </div>
    );
}
export default App;