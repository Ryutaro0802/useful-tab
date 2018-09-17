import React, { Component } from "react";
import TodoListItem from "./TodoListItem.jsx";

class TodoList extends Component {
  render() {
    const listItems = this.props.items.map(item => {
      return (
        <TodoListItem
          key={item.id}
          {...item}
          editStartTodo={this.props.editStartTodo}
          deleteTodo={this.props.deleteTodo}
          completeStateChangeTodo={this.props.completeStateChangeTodo}
          editCompleteTodo={this.props.editCompleteTodo}
        />
      );
    });
    return <ul className="todo-list">{listItems}</ul>;
  }
}

export default TodoList;
