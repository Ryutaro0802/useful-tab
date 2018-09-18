import React, { Component } from "react";

const todoAppKey = "useful-tab-weather-forecast";

class WeatherForecast extends Component {
  constructor() {
    super();
    this.state = { items: defaultItems };
  }

  render() {
    return (
      <div>天気予報</div>
    );
  }
}

export default WeatherForecast;