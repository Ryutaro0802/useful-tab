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
          className="aaa"
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
