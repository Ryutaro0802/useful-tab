import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import cssVariables from "../cssVariables.json";

export default class Footer extends Component {
  render() {
    return (
      <footer className={css(styles.footer)}>
        <small className={css(styles.tagLength)}>
          Items: {this.props.todoLength}
        </small>
        <small className={css(styles.addTag)}>
          <a href="#" className={css(styles.addTagAnc)}>Add tag +</a>
        </small>
      </footer>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    color: cssVariables.colors.text,
    padding: "10px 0",
    borderTop: `1px solid ${cssVariables.colors.border}`,
    display: "flex"
  },
  tagLength: {
    flexGrow: 1
  },
  addTagAnc: {
    color: 'inherit'
  }
});
