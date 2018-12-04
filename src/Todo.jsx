import React, { Component } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import NoTasks from "./components/NoTasks";
import { StyleSheet, css } from "aphrodite";
import cssVariables from "./cssVariables.json";
import "./App.css";
import { setItems, getItems } from "./util/storage.js";
const todoAppKey = "useful-tab-todo";
const defaultItems = JSON.parse(getItems(todoAppKey)) || [];

export default class Todo extends Component {
    constructor() {
        super();
        this.state = { items: defaultItems };
    }

    addTodo = title => {
        const newId = this.state.items.length + 1;
        const newItem = [
            {
                completed: false,
                id: newId,
                title: title
            }
        ];
        const newItems = this.state.items.concat(newItem);
        this.setState({
            items: newItems
        });
    };

    editCompleteTodo = ({ id, newTitle }) => {
        const todoItem = this.state.items.find(item => item.id === id);
        if (!todoItem) {
            return;
        }
        todoItem.title = newTitle;
        this.setState({
            items: this.state.items
        });
    };

    completeStateChangeTodo = ({ id }) => {
        const todoItem = this.state.items.find(todo => todo.id === id);
        if (!todoItem) {
            return;
        }
        todoItem.completed = !todoItem.completed;
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

    componentDidUpdate() {
        setItems(todoAppKey, JSON.stringify(this.state.items));
    }

    render() {
        const todoContents = this.state.items.length
            ? <TodoList
                items={this.state.items}
                deleteTodo={this.deleteTodo}
                completeStateChangeTodo={this.completeStateChangeTodo}
                editCompleteTodo={this.editCompleteTodo}
            />
            : <NoTasks />;

        return <div className="todo-app">
            <NewTodo addTodo={this.addTodo} />
            {todoContents}
            <Footer todoLength={this.state.items.length} />
        </div>;
    }
}

const styles = StyleSheet.create({

});
