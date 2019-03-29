import React, { Component } from "react";

function Contents() {
  return null;
}

export default class DragItems extends Component {
  static Contents = Contents;

  render() {
    const { children } = this.props;
    const contents = children.find(child => child.type === contents);

    return <div>{contents ? contents.props.children : null}</div>;
  }
}
