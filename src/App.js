import React, { Component } from 'react';
import Todos from './components/todos/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo';
import { v4 as uuid } from 'uuid';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Cook dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Learn react js',
        completed: false
      }
    ]
  }

  // Set todo as completed
  markCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Delete todo
  delTodo = (id) => {
    // ... seperator copies the todos exact state 
    this.setState({
      todos:
        [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  //Add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4,
      title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markCompleted={this.markCompleted}
            delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
