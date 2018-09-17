import React, { Component } from "react";

class NoTasks extends Component {
  render() {
    return (
      <div className="no-tasks">
        <i className="material-icons">sentiment_satisfied_alt</i>
        <p>No tasks</p>
      </div>
    );
  }
}

export default NoTasks;
