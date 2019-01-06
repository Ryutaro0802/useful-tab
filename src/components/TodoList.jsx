import React, { Component } from "react";
import TodoListItem from "./TodoListItem.jsx";

export default class TodoList extends Component {
  render() {
    const listItems = this.props.items.map(item => {
      return (
        <TodoListItem
          key={item.id}
          item={item}
          tags={this.props.tags}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
          addTag={this.props.addTag}
        />
      );
    });
    return <ul className="todo-list">{listItems}</ul>;
  }
}
