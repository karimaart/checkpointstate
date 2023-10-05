import React, { Component } from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleShow = () => {
      this.setState({ show: !this.state.show });
    };
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  render() {
    return (
      <div className="App">
        <h1>STATE AND LIFECYCLE COMPONENT</h1>
        <button onClick={this.handleShow}>show</button>
        {this.state.show ? <ClassComponent /> : <h1>click the button</h1>}
      </div>
    );
  }
}
