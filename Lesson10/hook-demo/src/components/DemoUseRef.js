import React, { useRef, useState } from "react";

function DemoUseRef() {
  const [count, setCount] = useState(60);
  const timeId = useRef();
  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount((pre) => pre - 1);
    }, 1000);
    console.log("Start ->", timeId.current);
  };
  const handleStop = () => {
    clearInterval(timeId.current);
    console.log("Stop ->", timeId.current);
  };
  return (
    <div className="alert alert-success">
      <h1>{count}</h1>
      <button className="btn btn-primary me-2" onClick={handleStart}>
        Start
      </button>
      <button className="btn btn-primary" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
}

export default DemoUseRef;
