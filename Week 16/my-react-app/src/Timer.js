import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const { children, className } = props;
  const [timer, setTimer] = useState(0);

  const isLoading = false;

  useEffect(() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    if (timer >= 0) {
      console.log("component did update", timer);
    }
  }, [timer]);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  const onDecreaseClick = () => {
    const newTimer = timer - 1;
    if (newTimer >= 0) {
      setTimer(newTimer);
    }
  };

  const onIncreaseClick = () => {
    setTimer(timer + 1);
  };

  console.log("render");

  return (
    <div data-test="test" className={className}>
      <label>My timer</label>
      <button onClick={onDecreaseClick}>-</button>
      {timer}
      <button onClick={onIncreaseClick}>+</button>
      {children}
    </div>
  );
};

export default Timer;
