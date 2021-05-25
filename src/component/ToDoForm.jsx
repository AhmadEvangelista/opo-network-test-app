import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import {
  Card,
  makeStyles,
  CardContent,
  Button,
  TextField,
} from '@material-ui/core';

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState('');
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: todo,
    });
    setTodo('');
    alert('Saved to To Do List');
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <h2 className={classes.title}>Todo Form</h2>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            type='text'
            className='form-control'
            placeholder='Add your Todo'
            value={todo}
            required
            onChange={(e) => setTodo(e.target.value)}
            variant='outlined'
          />
        </form>
        <Button variant='outlined' className='btn btn-success btn-block mt-3'>
          Add Todo
        </Button>
      </CardContent>
    </Card>
  );
};
const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
  },
});
export default TodoForm;
