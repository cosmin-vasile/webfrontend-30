import React, { Component } from "react";

class TimerClass extends Component {
  constructor(props) {
    super(props);

    console.log("constructor - metoda de initializare");

    this.state = {
      timer: 0,
    };

    this.onDecreaseClick = this.onDecreaseClick.bind(this);
    this.onIncreaseClick = this.onIncreaseClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { timer } = nextState;

    return timer >= 0;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.props, this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount - clean up");
  }

  onDecreaseClick() {
    const newTimer = this.state.timer - 1;
    if (newTimer >= 0) {
      this.setState({
        timer: newTimer,
      });
    }
  }

  onIncreaseClick() {
    this.setState((currentState) => {
      return {
        timer: currentState.timer + 1,
      };
    });
  }

  render() {
    const { children } = this.props;
    const { timer } = this.state;

    console.log("render");

    return (
      <div data-id={timer} data-test="timer-class">
        <label>My timer class</label>
        <button onClick={this.onDecreaseClick}>-</button>
        {timer}
        <button onClick={this.onIncreaseClick}>+</button>
        {children}
      </div>
    );
  }
}

export default TimerClass;
