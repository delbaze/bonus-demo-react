import { useState } from "react";
import NumberFilter from "./NumberFilter";

function DemoUseMemo() {
  const [count, setCount] = useState(0);
  const numbers = [1, 2, 3, 4, 5, 6];
  const [numbersState, setNumbersState] = useState([10, 21, 30, 49, 50]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrémenter: {count}</button>
      <button
        onClick={() => setNumbersState([...numbersState].map((e) => e * 2))}
      >
        Tout multiplier par 2
      </button>
      <NumberFilter numbers={numbersState} />
    </div>
  );
}

export default DemoUseMemo;
