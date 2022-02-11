import React, { Component } from "react";
import ChildCounter from "./ChildCounter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ],
  };

  handleIncrement = (id) => {
    console.log(id, "u Counters, handleIncrement se nalazim");

    // Spread operator
    const counters = [...this.state.counters];

    // this.setState({
    //   counters: counters.map((e) => {
    //     return e.id === id ? { ...e, value: e.value + 1, name: "Nebojsa" } : e;
    //   }),
    // });

    this.setState({
      counters: this.state.counters.map((counter) => {
        return counter.id === id
          ? { ...counter, value: counter.value + 1 }
          : counter;
      }),
    });
  };

  handleDelete = (id) => {
    console.log("handleDelete", id);

    this.setState({
      counters: this.state.counters.filter((counter) => counter.id !== id),
    });

    // this.setState((prevState) => {
    //   return {
    //     ...prevState,
    //     counters: prevState.counters.filter((counter) => {
    //       counter.id !== id;
    //     }),
    //   };
    // });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          //   <ChildCounter
          //     key={counter.id}
          //     id={counter.id}
          //     value={counter.value}
          //     onIncrement={this.handleIncrement}
          //   />

          <ChildCounter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
