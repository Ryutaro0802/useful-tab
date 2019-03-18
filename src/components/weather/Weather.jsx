import React, { Component } from "react";
import axios from "axios";
import dayjs from "dayjs";

const API_KEY = "059443ed516a4cc9d83a2e21ac0b645e";
const API_BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";
const CITY = "Tokyo";
const URL = `${API_BASE_URL}?q=${CITY},jp&units=metric&APPID=${API_KEY}`;
const tomorrow = dayjs()
  .add(1, "days")
  .format("YYYY-MM-DD");
const dayAfterTomorrow = dayjs()
  .add(2, "days")
  .format("YYYY-MM-DD");

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weathers: {}
    };
  }
  async componentDidMount() {
    const response = await axios.get(URL);
    const filteredList = response.data.list.filter(item => {
      const dtTxt = item.dt_txt.split(" ")[0];
      return [tomorrow, dayAfterTomorrow].includes(dtTxt);
    });
    const weatherList = filteredList.map(item => item.weather);
    // weatherList[2] tormorrow 06:00
    // weatherList[6] tormorrow 18:00
    // weatherList[10] dayAfterTormorrow 06:00
    // weatherList[14] dayAfterTormorrow 08:00
    this.setState({
      weathers: {
        tomorrow: {
          date: tomorrow,
          weather: {
            morning: weatherList[2][0],
            evening: weatherList[6][0]
          }
        },
        dayAfterTomorrow: {
          date: dayAfterTomorrow,
          weather: {
            morning: weatherList[10][0],
            evening: weatherList[14][0]
          }
        }
      }
    });
  }
  render() {
    return (
      <div>
        <div>Tomorrow</div>
        <div>DayAfterTomorrow</div>
      </div>
    );
  }
}
