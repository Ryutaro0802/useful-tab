import React, { Component } from "react";
import axios from "axios";
import dayjs from "dayjs";
import RainIcon from "../../components/icon/RainIcon";
import CloudIcon from "../../components/icon/CloudIcon";
import SunnyIcon from "../../components/icon/SunnyIcon";

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
      weathers: {},
      fetchFail: false
    };
  }

  async componentDidMount() {
    let response;
    try {
      response = await axios.get(URL);
    } catch (err) {
      this.setState({ fetchFail: false });
    }
    const filteredList = response.data.list.filter(item => {
      const dtTxt = item.dt_txt.split(" ")[0];
      return [tomorrow, dayAfterTomorrow].includes(dtTxt);
    });
    const weatherList = filteredList.map(item => item.weather);
    // weatherList[2] tomorrow 06:00
    // weatherList[6] tomorrow 18:00
    // weatherList[10] dayAfterTomorrow 06:00
    // weatherList[14] dayAfterTomorrow 08:00
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
    const tomorrow = Object.keys(this.state.weathers).length
      ? this.state.weathers.tomorrow
      : null;
    const dayAfterTomorrow = Object.keys(this.state.weathers).length
      ? this.state.weathers.dayAfterTomorrow
      : null;
    const selectViewIcon = weatherType => {
      switch (weatherType) {
        case "Clear":
          return <SunnyIcon width={100} fill="rgb(75, 75, 75)" />;
        case "Rain":
          return <RainIcon width={100} fill="rgb(75, 75, 75)" />;
        case "Clouds":
          return <CloudIcon width={100} fill="rgb(75, 75, 75)" />;
      }
    };

    return (
      <div className="weather">
        <div>tomorrow</div>
        <p>{tomorrow && tomorrow.date}</p>
        <p>{tomorrow && selectViewIcon(tomorrow.weather.morning.main)}</p>
        <p>{tomorrow && selectViewIcon(tomorrow.weather.evening.main)}</p>
        <div>dayAfterTomorrow</div>
        <p>{tomorrow && dayAfterTomorrow.date}</p>
        <p>
          {tomorrow &&
            selectViewIcon(dayAfterTomorrow.weather.morning.main)}
        </p>
        <p>
          {tomorrow &&
            selectViewIcon(dayAfterTomorrow.weather.evening.main)}
        </p>
      </div>
    );
  }
}
