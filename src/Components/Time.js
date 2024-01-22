import React, { useState } from "react";

let newTime= new Date().toLocaleTimeString();

function Time() {
  const [time, setTime] = useState(newTime);

  const getTime = (e) => {
    newTime= new Date().toLocaleTimeString();
    setTime(newTime);
  };

  setInterval(getTime, 1000)
  return (
    <>
      <h1>{time}</h1>
    </>
  );
}

export default Time;
