import React, { Component } from "react";

const style = {
  width: "100%",
  fontSize: "24px",
  padding: "16px 16px 16px 16px",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  borderBottom: "1px solid var(--border-color)"
};

class NewTodo extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      inputText: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.inputText);
    this.setState({
      inputText: ""
    });
  }

  onInput(e) {
    const value = e.target.value;
    this.setState({
      inputText: value
    });    
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.inputText}
            style={style}
            placeholder="What need to be done?"
            onInput={this.onInput}
          />
        </form>
      </div>
    );
  }
}

export default NewTodo;
