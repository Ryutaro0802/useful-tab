import React, { Component } from "react";
import TodoListItemDetail from "./TodoListItemDetail.jsx";
import { StyleSheet, css } from "aphrodite";
import cssVariables from "../cssVariables.json";

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }
  startItemEdit = e => {
    e.preventDefault();
    this.setState({ isEditing: true });
  };
  endItemEdit = () => {
    this.setState({ isEditing: false });
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
          <span className="todo-title">{this.props.item.title}</span>
        </div>
        <button className={css(styles.editButton)} onClick={this.startItemEdit}>
          <i className="material-icons">more_vert</i>
        </button>
        {this.state.isEditing && (
          <TodoListItemDetail
            item={this.props.item}
            endItemEdit={this.endItemEdit}
            editCompleteTodo={this.props.editCompleteTodo}
          />
        )}
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
