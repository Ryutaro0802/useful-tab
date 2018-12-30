import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

export default class NoTasks extends Component {
  render() {
    return (
      <div className={css(styles.noTasks)}>
        <span className={css(styles.noTasksIcon)}>
          <i className="material-icons icon">sentiment_satisfied_alt</i>
        </span>
        <p>No tasks</p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  noTasks: {
    textAlign: "center",
    padding: "30px 0"
  },
  noTasksIcon: {
    fontSize: "30px",
    icon: {
      fontSize: "60px",
      display: "block",
      marginBottom: "10px"
    }
  }
});
