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
          return <SunnyIcon width={30} fill="#DB8C0B" />;
        case "Rain":
          return <RainIcon width={30} fill="#779fa9" />;
        case "Clouds":
          return <CloudIcon width={30} fill="rgb(75, 75, 75)" />;
      }
    };

    return (
      <div className={css(styles.weatherItem)}>
        <p className={css(styles.dayOfTheWeek)}>
          {this.props.dayOfTheWeek}
        </p>
        <div className={css(styles.iconWrapper)}>
          <div className={css(styles.morningWeatherIcon)}>
            {selectViewIcon(this.props.morningWeather)}
          </div>
          <div className={css(styles.iconSeparatorLine)}></div>
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
    textAlign: "center",
    height: "100%",
    width: "100%"
  },
  iconWrapper: {
    position: "relative"
  },
  dayOfTheWeek: {
    fontWeight: "bold"
  },
  morningWeatherIcon: {
    position: "absolute",
    left: 10
  },
  eveningWeatherIcon: {
    position: "absolute",
    top: 47,
    left: 27
  },
  iconSeparatorLine: {
    ":before": {
      display: "block",
      content: "''",
      width: 1,
      height: 60,
      position: "absolute",
      left: 40,
      top: 10,
      transform: "rotate(60deg)",
      backgroundColor: styleVariables.borderColor
    }
  }
});
