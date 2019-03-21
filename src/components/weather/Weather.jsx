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
console.log(dayjs().add(1, 'day'))
console.log(dayjs().add(2, 'day'));
const tomorrowDayOfTheWeek = dayOfTheWeek[dayjs().day(1)];
const dayAfterTomorrowDayOfTheWeek = dayOfTheWeek[dayjs().day(2)];
console.log(tomorrowDayOfTheWeek);
console.log(dayAfterTomorrowDayOfTheWeek);

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
    const getFormatedDate = date => {
      const splitDate = date.split('-');
      return `${splitDate[1]}/${splitDate[2]}`
    };

    return (
      <div className={css(styles.weather)}>
        <div className={css(styles.tomorrow)}>
          <WeatherItem
            date={tomorrow && getFormatedDate(tomorrow.date)}
            morningWeather={tomorrow && tomorrow.weather.morning.main}
            eveningWeather={tomorrow && tomorrow.weather.evening.main}
          />
        </div>
        <div className={css(styles.dayAfterTomorrow)}>
          <WeatherItem
            date={
              dayAfterTomorrow && getFormatedDate(dayAfterTomorrow.date)
            }
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
    width: 150
  },
  tomorrow: {
    width: "50%"
  },
  dayAfterTomorrow: {
    borderLeft: `1px solid ${styleVariables.borderColor}`,
    width: "50%"
  }
});
