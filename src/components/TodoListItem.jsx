import React, { Component } from "react";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: this.props.title
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
      id: this.props.id,
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
              {this.props.title}
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
        <button className="delete" onClick={this.itemDelete}>
          <i className="material-icons">close</i>
        </button>
      </li>
    );
  }
}

export default TodoListItem;
