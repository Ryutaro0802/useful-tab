import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import cssVariables from "../cssVariables.json";
export default class TodoListItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: this.props.item
    };
  }
  close = e => {
    e.preventDefault();
    this.props.endItemEdit();
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.endItemEdit();
    this.props.editTodo({
      todo: this.state.newTodo
    });
  };
  textChange = e => {
    this.setState({ newTitle: e.target.value });
    const todo = { ...this.state.newTodo };
    todo.title = e.target.value;
    this.setState({
      newTodo: todo
    });
  };
  render() {
    return (
      <div className={css(styles.todoDetail)}>
        <div onClick={this.close}>
          <a href="#">
            <i className="material-icons">close</i>
          </a>
        </div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              className={css(styles.todoDetailInput)}
              value={this.state.newTodo.title}
              type="text"
              onChange={this.textChange}
            />
          </div>
        </form>
        <div className="todoTagGroup">
          <div className="todoTag">タスク</div>
          <div className="todoTag">雑用</div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  todoDetail: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px 1px rgba(213,208,157,0.76)",
    padding: "10px",
    zIndex: 1,
    top: 0,
    right: "40px",
    width: "300px"
  },
  todoDetailInput: {
    border: "1px solid"
  }
});
