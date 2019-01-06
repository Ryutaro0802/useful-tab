import React, { Component } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import NoTasks from "./components/NoTasks";
import { StyleSheet, css } from "aphrodite";
import "./App.css";
import { setItems, getItems } from "./util/storage.js";

const todoAppKey = "todoItemStorageKey";
const tagsKey = "todoTagsKey";
const defaultItems = JSON.parse(getItems(todoAppKey)) || [];
const defaultTags = JSON.parse(getItems(tagsKey)) || [];

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      items: defaultItems,
      tags: defaultTags
    };
  }
  addTodo = title => {
    const newId = this.state.items.length + 1;
    const newItem = [
      {
        id: newId,
        title: title,
        detail: "",
        tags: []
      }
    ];
    const newItems = this.state.items.concat(newItem);
    this.setState({
      items: newItems
    });
  };
  editTodo = ({ todo }) => {
    let targetTodo = this.state.items.find(item => item.id === todo.id);
    if (!targetTodo) {
      return;
    }
    targetTodo.title = todo.title;
    targetTodo.tags = todo.tags;
    this.setState({
      items: this.state.items
    });
  };
  deleteTodo = ({ id }) => {
    const newItems = this.state.items.filter(todo => todo.id !== id);
    this.setState({
      items: newItems
    });
  };
  addTag = title => {
    const newId = this.state.tags.length + 1;
    const newTag = [
      {
        id: newId,
        title: title
      }
    ];
    const newTags = this.state.tags.concat(newTag);
    this.setState({
      tags: newTags
    });
    console.log(this.state.tags);
  };
  componentDidUpdate() {
    setItems(todoAppKey, JSON.stringify(this.state.items));
    setItems(tagsKey, JSON.stringify(this.state.tags));
  }
  render() {
    const todoContents = this.state.items.length ? (
      <TodoList
        items={this.state.items}
        tags={this.state.tags}
        deleteTodo={this.deleteTodo}
        editTodo={this.editTodo}
        addTag={this.addTag}
      />
    ) : (
      <NoTasks />
    );
    return (
      <div className={css(styles.todoApp)}>
        <NewTodo addTodo={this.addTodo} />
        {todoContents}
        <Footer todoLength={this.state.items.length} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  todoApp: {
    margin: "100px auto 0",
    maxWidth: "550px"
  }
});
