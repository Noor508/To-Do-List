
import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const IncNuM = () => {
    // Use the pre-increment operator or setCount function to update the state
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNuM}>Click Me</button>
    </>
  );
}

export default Count;
