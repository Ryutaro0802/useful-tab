import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { setItems, getItems } from "../../util/storage.js";

const memoGadgetKey = "useful-tab-memo";
const defaultValue = JSON.parse(getItems(memoGadgetKey)) || "";

export default class Memo extends Component {
  constructor() {
    super();
    this.state = { value: defaultValue };
  }

  inputHandler = e => {
    this.setState({
      value: e.target.value
    });
    setItems(memoGadgetKey, JSON.stringify(this.state.value));
  };

  render() {
    return (
      <div>
        <textarea
          className={css(styles.memo)}
          name=""
          value={this.state.value}
          cols="30"
          rows="10"
          onInput={this.inputHandler}
        />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  memo: {
    "appearance": "none",
    "-webkit-appearance": "none",
    "border": "1px solid #c4c4c4",
    "padding": ".5em",
    "cursor": "text"
  }
});
