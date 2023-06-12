import React, { useState, useEffect } from "react";
import Greeting from "./greeting";

const Clock = () => {
  const [currentDisplay, setCurrentDisplay] = useState(new Date());

  useEffect(() => {
    const refreshClock = () => {
      setCurrentDisplay(new Date());
      console.log("What is type here?", typeof currentDisplay);
    };
    setInterval(refreshClock, 1000);
  }, []);
  return (
    <div>
      {currentDisplay.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}
      {/* {currentDisplay.toLocaleTimeString()} */}
      {/* <Greeting time={currentDisplay.toLocaleString()} /> */}
    </div>
  );
};

export default Clock;
