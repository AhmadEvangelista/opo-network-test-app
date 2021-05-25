import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem('todos');
    return localTodos ? JSON.parse(localTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    setTodos([todo, ...todos]);
    console.log(todo);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, completeTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
