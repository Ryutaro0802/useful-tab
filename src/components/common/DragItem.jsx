import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

export default class DragItem extends Component {
  constructor(props) {
    super(props);
    this.draggableItem = React.createRef();
    this.x = 0;
    this.y = 0;
    this.classes = {
      dragging: "dragging"
    };
  }
  componentDidMount() {
    const dragItemElement = this.draggableItem.current;
    const handleMouseDown = e => {
      console.log('mouseDown');
      dragItemElement.classList.add(this.classes.dragging);
      this.x = e.pageX - dragItemElement.offsetLeft;
      this.y = e.pageX - dragItemElement.offsetTop;
      document.body.addEventListener("mousemove", handleMouseMove, false);
    };
    const handleMouseMove = e => {
      console.log('mouseMove');
      dragItemElement.style.left = `${e.pageX - this.x}px`;
      dragItemElement.style.top = `${e.pageY - this.y}px`;
    };
    const handleMouseUp = () => {
      console.log('mouseUP');
      dragItemElement.removeEventListener(
        "mousedown",
        handleMouseDown,
        false
      );
      document.body.removeEventListener(
        "mousemove",
        handleMouseMove,
        false
      );
      dragItemElement.removeEventListener(
        "mouseup",
        handleMouseUp,
        false
      );
    };
    dragItemElement.addEventListener("mousedown", handleMouseDown, false);
    dragItemElement.addEventListener('mouseup', handleMouseUp, false);
  }
  render() {
    return (
      <div className={css(styles.DragItem)} ref={this.draggableItem}>
        {this.props.children}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  DragItem: {
    cursor: "move",
    position: "absolute"
  },
  "[draggable]": {
    userSelect: "none"
  }
});
