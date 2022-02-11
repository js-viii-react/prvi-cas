import React, { Component } from "react";

class ChildCounter extends Component {
  //   state = {
  //     value: this.props.value,
  //   };

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  // test
  render() {
    return (
      <div style={{ margin: 15 }}>
        #{this.props.counter.value}
        <button onClick={() => this.props.onIncrement(this.props.counter.id)}>
          +
        </button>
        <button
          style={{ marginLeft: 5 }}
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ChildCounter;
