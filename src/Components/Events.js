import { useState } from "react";
import "./Eventa.css";

function Events() {
  const Purple = "#8e44ad";
  const [bg, setBg] = useState(Purple);

  const [name, setName] = useState('        click me');

  function bgChange() {
    let clr = "#34495e";
    setBg(clr);
    setName('OUUCHHH 😒');
  }


  function bgBack()
  {
    setBg(Purple);
    setName('AYYO !! 🙄')
  }
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
      </div>
    </>
  );
}

export default Events;
