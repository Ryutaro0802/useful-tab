import React, { Component } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";
import { setItems, getItems } from "./util/storage.js";

// const items = [
//   { id: 0, title: "adf", completed: false, isEditing: false },
//   { id: 1, title: "asfd", completed: false, isEditing: false },
//   { id: 2, title: "adfs", completed: false, isEditing: false }
// ];

const todoAppKey = "useful-tab-todo";
const defaultItems = JSON.parse(getItems(todoAppKey));
  
class App extends Component {
  constructor() {
    super();
    this.state = { items: defaultItems };
  }

  addTodo = title => {
    const newId = this.state.items.length + 1;
    const newItem = [
      {
        completed: false,
        id: newId,
        isEditing: false,
        title: title
      }
    ];
    const newItems = this.state.items.concat(newItem);
    this.setState({
      items: newItems
    });
  };

  editStartTodo = ({ id }) => {
    const todoItem = this.state.items.find(item => item.id === id);
    if (!todoItem) {
      return;
    }
    todoItem.isEditing = true;
    this.setState({
      items: this.state.items
    });
  };

  editCompleteTodo = ({ id, newTitle }) => {
    const todoItem = this.state.items.find(item => item.id === id);
    if (!todoItem) {
      return;
    }
    todoItem.isEditing = false;
    todoItem.title = newTitle;
    this.setState({
      items: this.state.items
    });
  };

  completeStateChangeTodo = ({ id }) => {
    const todoItem = this.state.items.find(todo => todo.id === id);
    if (!todoItem) {
      return;
    }
    todoItem.completed = !todoItem.completed;
    this.setState({
      items: this.state.items
    });
  };

  deleteTodo = ({ id }) => {
    const newItems = this.state.items.filter(todo => todo.id !== id);
    this.setState({
      items: newItems
    });
  };

  componentDidUpdate() {
    setItems(todoAppKey, JSON.stringify(this.state.items));
  }

  render() {
    return (
      <div className="todo-app">
        <NewTodo addTodo={this.addTodo} />
        <TodoList
          items={this.state.items}
          editStartTodo={this.editStartTodo}
          deleteTodo={this.deleteTodo}
          completeStateChangeTodo={this.completeStateChangeTodo}
          editCompleteTodo={this.editCompleteTodo}
        />
        <Footer todoLength={this.state.items.length} />
      </div>
    );
  }
}

export default App;
