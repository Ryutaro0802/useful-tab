import React, { Component } from "react";

export default class Weather extends Component {
    componentDidMount() {
        if (!'geolocation' in navigator) {
            return;
        }

    }
  render() {
    return <div>aaa</div>;
  }
}
