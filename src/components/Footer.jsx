import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import cssVariables from "../cssVariables.json";

export default class Footer extends Component {
  render() {
    return (
      <footer className={css(styles.footer)}>
        <span>Todo Items: {this.props.todoLength}</span>
      </footer>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    color: cssVariables.colors.text,
    padding: "10px 15px",
    borderTop: `1px solid ${cssVariables.colors.border}`
  }
});
