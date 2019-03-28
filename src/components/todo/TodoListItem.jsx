import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: this.props.title,
      isEditing: false
    };
    this.textInput = React.createRef();
  }

  changeCompleteState = e => {
    e.preventDefault();
    this.props.completeStateChangeTodo({ id: this.props.item.id });
  };

  editStartTitle = () => {
    this.setState({
      isEditing: true
    });
  };

  updateTitle = e => {
    this.state.newTitle = e.target.value;
  };

  itemDelete = e => {
    e.preventDefault();
    this.props.deleteTodo({ id: this.props.item.id });
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
      <li className={this.props.item.completed ? "is-complete" : ""}>
        <i
          className="material-icons checkbox"
          onClick={this.changeCompleteState}
        >
          {this.props.completed ? "check_circle" : "check_circle_outline"}
        </i>
        <div className="text">
          {!this.state.isEditing && (
            <span className={css(styles.titleLabel)} onClick={this.editStartTitle}>
              {this.props.item.title}
            </span>
          )}
          {this.state.isEditing && (
            <input
              className="todo-title-input"
              type="text"
              ref={this.textInput}
              defaultValue={this.props.item.title}
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

const styles = StyleSheet.create({
  titleLabel: {
    width: "100%",
    display: "block"
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
