import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import cssVariables from "../cssVariables.json";
export default class TodoListItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: this.props.item.title
    };
  }
  close = e => {
    e.preventDefault();
    this.props.endItemEdit();
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.endItemEdit();
  };
  textChange = e => {
    this.setState({ newTitle: e.target.value });
  };
  editCompleteTitle = e => {
    e.preventDefault();
    this.setState({ isEditing: true });
    this.props.editCompleteTodo({
      id: this.props.item.id,
      newTitle: this.state.newTitle
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
              value={this.state.newTitle}
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
    position: "fixed",
    backgroundColor: "#fff",
    borderRadius: "3px",
    boxShadow: "0px 0px 5px 1px rgba(213,208,157,0.76)",
    padding: "10px"
  },
  todoDetailInput: {
    border: "1px solid"
  }
});
