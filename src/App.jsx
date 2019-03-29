import React, { Component } from "react";
import Todo from "./components/todo/Todo";
import Memo from "./components/memo/Memo";
import Weather from "./components/weather/Weather";
// import DragItems from "./components/common/DragItems";
import DragItem from "./components/common/DragItem";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <DragItem>
          <Todo />
        </DragItem>
        <DragItem>
          <Memo />
        </DragItem>
        <DragItem>
          <Weather />
        </DragItem>
      </div>
    );
  }
}
