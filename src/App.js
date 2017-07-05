import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo, generateId, findById, toggleTodo, updateTodos} from './lib/todoHelpers'
import {pipe, partial} from './lib/utils'

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        name: 'LearnJSX',
        isComplete: false
      },
      {
        id: 2,
        name: 'Build an Awesome App',
        isComplete: false
      },
      {
        id: 3,
        name: 'Ship it',
        isComplete: false
      }
    ],
    currentTodo:''
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodos, this.state.todos));
    const updatedTodos = getUpdatedTodos(id, this.state.todos);
    this.setState({todos: updatedTodos})
  }

  handleSubmit = (evt) => {
    evt.preventDefault() // Prevent the form from submitting through a GET
    const newId = generateId();
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updateTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updateTodos,
      currentTodo: '',
      errorMessage:''
    })
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  handleInputChange = (evt) =>{
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {

    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm
             handleInputChange={this.handleInputChange}
             currentTodo={this.state.currentTodo}
             handleSubmit={submitHandler}/>

           <TodoList handleToggle={this.handleToggle} todos={this.state.todos}/>

        </div>
      </div>
    );
  }
}

export default App;
