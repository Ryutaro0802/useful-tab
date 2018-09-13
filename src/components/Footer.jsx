import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span>Todo Items: {this.props.todoLength}</span>
      </footer>
    );
  }
}

export default Footer;
