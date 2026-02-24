import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 data-testid="counter-value">{count}</h2>
      <button onClick={() => setCount(count + 1)} className="counter-button">
        증가
      </button>
    </div>
  );
}

export default Counter;
