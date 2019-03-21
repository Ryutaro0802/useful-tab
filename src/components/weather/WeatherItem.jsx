import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import RainIcon from "../../components/icon/RainIcon";
import CloudIcon from "../../components/icon/CloudIcon";
import SunnyIcon from "../../components/icon/SunnyIcon";
import styleVariables from "../../styleVariables";

export default class Weather extends Component {
  constructor() {
    super();
  }

  render() {
    const selectViewIcon = weatherType => {
      switch (weatherType) {
        case "Clear":
          return <SunnyIcon width={35} fill="#DB8C0B" />;
        case "Rain":
          return <RainIcon width={35} fill="#779fa9" />;
        case "Clouds":
          return <CloudIcon width={35} fill="rgb(75, 75, 75)" />;
      }
    };

    return (
      <div className={css(styles.weatherItem)}>
        <p>{this.props.date}</p>
        <div className={css(styles.iconWrapper)}>
          <div className={css(styles.morningWeatherIcon)}>
            {selectViewIcon(this.props.morningWeather)}
          </div>
          <div className={css(styles.eveningWeatherIcon)}>
            {selectViewIcon(this.props.eveningWeather)}
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  weatherItem: {
    textAlign: "center"
  },
  iconWrapper: {
    position: "relative"
  },
  morningWeatherIcon: {
    position: "absolute"
  },
  eveningWeatherIcon: {
    position: "absolute",
    top: 47,
    left: 27
  }
});
