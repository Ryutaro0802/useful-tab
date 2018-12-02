import React, { Component } from "react";

export default class TodoListItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" />
        </div>
        <div className="todoTagGroup">
          <div className="todoTag">タスク</div>
          <div className="todoTag">雑用</div>
        </div>
      </div>
    );
  }
}
