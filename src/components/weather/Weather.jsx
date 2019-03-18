import React, { Component } from "react";
import axios from 'axios';
export default class Weather extends Component {
  async componentDidMount() {
    const API_KEY = "059443ed516a4cc9d83a2e21ac0b645e";
    const API_BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";
    const CITY = "Tokyo";
    const URL = `${API_BASE_URL}?q=${CITY},jp&units=metric&APPID=${API_KEY}`;
    const response = await axios.get(URL);
    const weatherList = response.data.list;
    console.log(weatherList);
    if (!"geolocation" in navigator) {
      return;
    }
  }
  render() {
    return <div>aaa</div>;
  }
}
