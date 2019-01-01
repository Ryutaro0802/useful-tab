import React, { Component } from "react";
import TodoListItem from "./TodoListItem.jsx";

export default class TodoList extends Component {
  render() {
    const listItems = this.props.items.map(item => {
      return (
        <TodoListItem
          key={item.id}
          item={item}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
        />
      );
    });
    return <ul className="todo-list">{listItems}</ul>;
  }
}
