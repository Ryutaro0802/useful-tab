import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import axios from "axios";
import dayjs from "dayjs";
import WeatherItem from "./WeatherItem";
import styleVariables from "../../styleVariables";

const API_KEY = "059443ed516a4cc9d83a2e21ac0b645e";
const API_BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";
const CITY = "Tokyo";
const URL = `${API_BASE_URL}?q=${CITY},jp&units=metric&APPID=${API_KEY}`;
const dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const tomorrow = dayjs()
  .add(1, "days")
  .format("YYYY-MM-DD");
const dayAfterTomorrow = dayjs()
  .add(2, "days")
  .format("YYYY-MM-DD");
const tomorrowDayOfTheWeek =
  dayOfTheWeek[
    dayjs()
      .add(1, "day")
      .day()
  ];
const dayAfterTomorrowDayOfTheWeek =
  dayOfTheWeek[
    dayjs()
      .add(2, "day")
      .day()
  ];

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
      this.setState({ fetchFail: true });
      return;
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
          dayOfTheWeek: tomorrowDayOfTheWeek,
          weather: {
            morning: weatherList[2][0],
            evening: weatherList[6][0]
          }
        },
        dayAfterTomorrow: {
          date: dayAfterTomorrow,
          dayOfTheWeek: dayAfterTomorrowDayOfTheWeek,
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

    return (
      <div className={css(styles.weather)}>
        <div className={css(styles.tomorrow)}>
          <WeatherItem
            dayOfTheWeek={tomorrow && tomorrow.dayOfTheWeek}
            morningWeather={tomorrow && tomorrow.weather.morning.main}
            eveningWeather={tomorrow && tomorrow.weather.evening.main}
          />
        </div>
        <div className={css(styles.dayAfterTomorrow)}>
          <WeatherItem
            dayOfTheWeek={dayAfterTomorrow && dayAfterTomorrow.dayOfTheWeek}
            morningWeather={
              dayAfterTomorrow && dayAfterTomorrow.weather.morning.main
            }
            eveningWeather={
              dayAfterTomorrow && dayAfterTomorrow.weather.evening.main
            }
          />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  weather: {
    display: "flex",
    height: 120,
    width: 160
  },
  tomorrow: {
    width: "50%"
  },
  dayAfterTomorrow: {
    borderLeft: `1px solid ${styleVariables.borderColor}`,
    width: "50%"
  }
});
