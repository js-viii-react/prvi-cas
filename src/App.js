import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ],
  };

  render() {
    return (
      <div className="my-app">
        {/* Iza viticastih zagrada 2+2 = { 2+2 } */}
        {/* <Counter /> */}
        <Navbar totalCounters={this.state.counters.length} />
        <Counters />
      </div>
    );
  }
}

export default App;
