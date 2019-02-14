import React, { Component } from "react";
import Header from './layout/Header';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Do the dishes",
        completed: false
      },
      {
        id: 3,
        title: "Do the laundry",
        completed: true
      },
      {
        id: 4,
        title: "Walk Myah",
        completed: false
      }
    ]
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  addTodo = (title) => {
    const newTodo = {
      id: 5,
      title: title,
      completed: false
    }
    const newTodos = [...this.state.todos].concat([newTodo])
    this.setState({
      todos: newTodos
    });
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
            <Header />
            <AddTodo addTodo={ this.addTodo } />
            <Todos todos={ this.state.todos } markComplete={ this.markComplete } delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
