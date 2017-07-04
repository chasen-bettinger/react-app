import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo, generateId} from './lib/todoHelpers'

class App extends Component {

  constructor() {
    super();
    this.state= {
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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault() // Prevent the form from submitting through a GET
    const newId = generateId();
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updateTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updateTodos,
      currentTodo: ''
    })
  }

  handleInputChange(evt){
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm
             handleInputChange={this.handleInputChange}
             currentTodo={this.state.currentTodo}
             handleSubmit={this.handleSubmit}/>

           <TodoList todos={this.state.todos}/>

        </div>
      </div>
    );
  }
}

export default App;
