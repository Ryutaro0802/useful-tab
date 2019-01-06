import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import cssVariables from "../cssVariables.json";
export default class TodoListItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: this.props.item,
      newTagTitle: "",
      isTagEditing: false
    };
  }
  close = e => {
    e.preventDefault();
    this.props.endItemEdit();
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.endItemEdit();
    this.props.editTodo({
      todo: this.state.newTodo
    });
  };
  titleChange = e => {
    const todo = { ...this.state.newTodo };
    todo.title = e.target.value;
    this.setState({ newTodo: todo });
  };
  addTagButtonClick = e => {
    e.preventDefault();
    this.setState({ isTagEditing: true });
  };
  tagInputKeydown = e => {
    const keyCode = { enter: 13, esc: 27 };
    if (e.keyCode === keyCode.enter) {
      if (!e.target.value) {
        return false;
      }
      this.props.addTag(e.target.value);
      this.setState({ isTagEditing: false });
    }
    if (e.keyCode === keyCode.esc) {
      this.setState({ isTagEditing: false });
    }
  };
  tagValueChange = e => {
    this.setState({ newTagTitle: e.target.value });
  };
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const tags = this.props.tags.map(tag => {
      const id = tag.id;
      const title = tag.title;
      return <div key={id}>{title}</div>;
    });
    // const tags = this.props.tags.map(tag => {
    //   const id = tag.id;
    //   const title = tag.title;
    //   return <div key={id}>{{ title }}</div>;
    // });
    return (
      <div className={css(styles.todoDetail)}>
        <div className={css(styles.closeButton)}>
          <button className={css(styles.closeButtonAnc)} onClick={this.close}>
            <i className="material-icons">close</i>
          </button>
        </div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              className={css(styles.todoDetailInput)}
              value={this.state.newTodo.title}
              type="text"
              onChange={this.titleChange}
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="add todo detail"
            />
          </div>
        </form>
        <div className={css(styles.tagContainer)}>
          <ul>{tags}</ul>
          {tags.length !== 0 && (
            <div className={css(styles.tagGroup)}>{ tags }</div>
          )}
          {this.state.isTagEditing ? (
            <input
              onKeyDown={this.tagInputKeydown}
              onChange={this.tagValueChange}
              value={this.state.newTagTitle}
              type="text"
            />
          ) : (
            <div className={css(styles.addTagIcon)}>
              <button onClick={this.addTagButtonClick}>+</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  todoDetail: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px 1px rgba(213,208,157,0.76)",
    padding: "10px",
    zIndex: 1,
    top: 0,
    right: "40px",
    width: "300px"
  },
  closeButton: {
    textAlign: "right"
  },
  closeButtonAnc: {
    color: cssVariables.colors.text
  },
  todoDetailInput: {
    border: "1px solid"
  },
  tagContainer: {
    display: "inline-flex"
  },
  tagGroup: {
    display: "flex"
  },
  tag: {}
});
