import React, { Component } from "react";
import Todo from "./Todo.jsx";
import Memo from "./components/memo/Memo.jsx";
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Todo />
        <Memo />
      </div>
    );
  }
}

export default App;
