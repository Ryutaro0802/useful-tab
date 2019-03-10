import React, { Component } from "react";
import Todo from "./Todo";
import Memo from "./components/memo/Memo";
import Weather from './components/weather/Weather';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Todo />
        <Memo />
        <Weather />
      </div>
    );
  }
}
