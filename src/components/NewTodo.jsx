import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import cssVariables from "../cssVariables.json";

export default class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputText);
    this.setState({ inputText: "" });
  };

  onChange = e => {
    const value = e.target.value;
    this.setState({ inputText: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.inputText}
            className={css(styles.newTodoInput)}
            placeholder="What need to be done?"
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  newTodoInput: {
    width: "100%",
    fontSize: "24px",
    padding: "16px 16px 16px 16px",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: `1px solid ${cssVariables.colors.border}`,
    "::placeholder": {
      color: cssVariables.placeHolder
    }
  }
});
