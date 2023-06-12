import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/clock";
import MainFocus from "./components/mainFocus";
import image from "./assets/London_Eye.jpg";

function App() {
  return (
    <div
      className='App'
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1680px 1024px",
      }}>
      <Clock />
      <MainFocus />
    </div>
  );
}

export default App;
