import React, { Component } from "react";

export default class Weather extends Component {
  componentDidMount() {
    const API_KEY = "059443ed516a4cc9d83a2e21ac0b645e";
    const API_BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";
    if (!"geolocation" in navigator) {
      return;
    }
  }
  render() {
    return <div>aaa</div>;
  }
}
