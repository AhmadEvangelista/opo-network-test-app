import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { makeStyles, Card } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodoContext);
  const classes = useStyles();

  return todos.length ? (
    <div className={classes.root}>
      <h3> Todo List</h3>
      <ul>
        {todos.map((todo) => (
          <Card key={todo.id}>
            <li>{todo.text}</li>
            <CancelIcon
              onClick={() => {
                alert('Are you sure to delete To Do?');
                removeTodo(todo.id);
              }}
            />
          </Card>
        ))}
      </ul>
    </div>
  ) : (
    <h2>Nothing left to do.</h2>
  );
};

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    textAlign: 'center',
  },
});
export default TodoList;
