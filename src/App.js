import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import ToDoForm from './component/ToDoForm';
import ToDoList from './component/ToDoList';
import DisplayData from './component/DisplayData';
import TodoContextProvider from './context/TodoContext';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <TodoContextProvider>
          <Route exact path='/todoform' component={ToDoForm} />
          <Route exact path='/todolist' component={ToDoList} />
          <Route exact path='/displaydata' component={DisplayData} />
        </TodoContextProvider>
      </Switch>
    </div>
  );
};

export default App;
