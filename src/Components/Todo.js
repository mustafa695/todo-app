import React, { useState } from "react";

const Todo = ({
  todos,
  removeTodo,
  editTodo,
  editId,
  handleEditChange,
  inputValue,
  setInputValue,
  onComplete,
}) => {
  return todos.map((todo) => (
    <ul className="items">
      <li>
        {editId === todo.id ? (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : (
          //print todos
          <span
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : "" }}
          >
            {todo.text}
          </span>
        )}
        {editId === todo.id ? (
          <button
            className="btn btn-primary ml-3"
            onClick={() => editTodo(todo.id, inputValue)}
          >
            Update Todo
          </button>
        ) : (
          <>
            <button
              className="btn btn-danger mr-3"
              onClick={() => removeTodo(todo.id)}
            >
              X
            </button>
            <button
              className="btn btn-success"
              onClick={() => handleEditChange(todo.id, todo.text)}
            >
              Edit
            </button>
            <button
              className="btn btn-primary ml-3"
              onClick={() => onComplete(todo.id)}
            >
              {todo.isDone ? 'Not Complete':'Compelete'}
            </button>
          </>
        )}
      </li>
    </ul>
  ));
};

export default Todo;
