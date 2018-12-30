import React, { Component } from "react";
import TodoListItemDetail from "./TodoListItemDetail.jsx";
import { StyleSheet, css } from "aphrodite";
import cssVariables from "../cssVariables.json";

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: this.props.title,
      isEditing: false
    };
  }

  changeCompleteState = e => {
    e.preventDefault();
    this.props.completeStateChangeTodo({ id: this.props.id });
  };

  editStartTitle = () => {
    this.setState({ isEditing: true });
    // setTimeout(() => this.refs.titleInput.focus(), 10);
  };

  editCompleteTitle = e => {
    e.preventDefault();
    this.setState({ isEditing: true });
    this.props.editCompleteTodo({
      id: this.props.item.id,
      newTitle: this.state.newTitle
    });
  };

  itemEdit = e => {
    e.preventDefault();
    this.setState({ isEditing: true });
  };

  updateTitle = e => {
    this.state.newTitle = e.target.value;
  };

  itemDelete = e => {
    e.preventDefault();
    this.props.deleteTodo({ id: this.props.item.id });
  };

  onKeyDown = e => {
    if (e.keyCode === 13) {
      this.editCompleteTitle(e);
    }
  };

  render() {
    return (
      <li className={css(styles.todoListItem)}>
        <i className="material-icons checkbox" onClick={this.itemDelete}>
          {this.props.completed ? "check_circle" : "check_circle_outline"}
        </i>
        <div className={css(styles.itemText)}>
          <span className="todo-title" onClick={this.editStartTitle}>
            {this.props.item.title}
          </span>
        </div>
        {/* <button className={css(styles.deleteButton)} onClick={this.itemDelete}>
          <i className="material-icons">close</i>
        </button> */}
        <button className={css(styles.editButton)} onClick={this.itemEdit}>
          <i className="material-icons">more_vert</i>
        </button>
        {/* <div style="display: none;">
          {this.state.isEditing && <TodoListItemDetail />}
        </div> */}
      </li>
    );
  }
}

const styles = StyleSheet.create({
  todoListItem: {
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    borderBottom: `1px solid ${cssVariables.colors.border}`,
    padding: "16px",
    ":last-child": {
      borderBottom: "none"
    }
  },
  itemText: {
    flexGrow: "1",
    padding: "0 16px"
  },
  editButton: {
    cursor: "pointer"
  },
  deleteButton: {
    color: cssVariables.colors.emphasis,
    ":hover": {
      cursor: "pointer"
    }
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
