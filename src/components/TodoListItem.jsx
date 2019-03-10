import React, { Component } from "react";
import TodoListItemDetail from "./TodoListItemDetail.jsx";
import { StyleSheet, css } from "aphrodite";

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: this.props.title,
      isEditing: this.props.isEditing
    };
  }

  changeCompleteState = e => {
    e.preventDefault();
    this.props.completeStateChangeTodo({ id: this.props.id });
  };

  editStartTitle = e => {
    setTimeout(() => this.refs.titleinput.focus(), 10);
    this.props.editStartTodo({ id: this.props.id });
  };

  itemEdit = e => {

  };

  updateTitle = e => {
    this.state.newTitle = e.target.value;
  };

  itemDelete = e => {
    e.preventDefault();
    this.props.deleteTodo({ id: this.props.id });
  };

  editCompleteTitle = e => {
    e.preventDefault();
    this.props.editCompleteTodo({
      id: this.props.item.id,
      newTitle: this.state.newTitle
    });
  };

  onKeyDown = e => {
    if (e.keyCode === 13) {
      this.editCompleteTitle(e);
    }
  };

  render() {
    return (
      <li className={this.props.completed ? "is-complete" : ""}>
        <i
          className="material-icons checkbox"
          onClick={this.changeCompleteState}
        >
          {this.props.completed ? "check_circle" : "check_circle_outline"}
        </i>
        <div className="text">
          {!this.props.isEditing && (
            <span className="todo-title" onClick={this.editStartTitle}>
              {this.props.item.title}
            </span>
          )}
          {this.props.isEditing && (
            <input
              type="text"
              ref="titleinput"
              defaultValue={this.props.title}
              onInput={this.updateTitle}
              onBlur={this.editCompleteTitle}
              onKeyDown={this.onKeyDown}
            />
          )}
        </div>
        <button className="edit" onClick={this.itemEdit}>
          <i className="material-icons">create</i>
        </button>
        <button className="delete" onClick={this.itemDelete}>
          <i className="material-icons">close</i>
        </button>

        {this.props.isEditing && <TodoListItemDetail />}
      </li>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    backgroundColor: "red"
  },
  blue: {
    backgroundColor: "blue"
  },
  hover: {
    ":hover": {
      backgroundColor: "red"
    }
  },
  small: {
    "@media (max-width: 600px)": {
      backgroundColor: "red"
    }
  }
});
