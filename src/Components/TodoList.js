import React, { useState } from "react";
// import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList({ onClick }) {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const [editId, setEdit] = useState(false);

  const [inputValue, setInputValue] = useState("");


  const handleChange = (e) => {
    setInput(e.target.value);
    
  };
  const handleEditChange = (id, text) => {
    setEdit(id);
    setInputValue(text);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if(input !== ''){
      const newTodos = [...todos, {
        id: Math.floor(Math.random() * 10000),
        text: input,
        isDone: false  
      }];
    
      setTodos(newTodos);
      setInput("");
      console.log(newTodos);
      localStorage.setItem('todos', 'todos');
    }
    else{
      alert('empty todo..')
    } 
       
  };

  const removeTodo = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id, text) => {
    const editTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(editTodos);
    setEdit(false);
  };

  const onComplete = (id) => {
   setTodos(
     todos.map((todo) => 
        todo.id === id ? {...todo, isDone: !todo.isDone } : todo)
   )
  };

  return (
    <>
    <div className="todo">
      <h2 style={{color:'#fff', textAlign: 'center', paddingTop:'15px'}}>Todo React Js</h2>
    <form className="todo-form" onSubmit={addTodo}>
        <input
            className="form-control mr-2"
            placeholder="Enter Some Todo..."
            value={input}
            onChange={handleChange}
            name="text"
        />
        <button className="btn btn-info" onClick={addTodo}>Add Todo</button>
        </form>

      <Todo
        todos={todos}
        removeTodo={removeTodo}
        editTodo={editTodo}
        handleEditChange={handleEditChange}
        editId={editId}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onComplete={onComplete}
      />
    </div>
      
    </>
  );
}

export default TodoList;
