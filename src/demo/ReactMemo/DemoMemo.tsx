import { useState } from "react";
import Message from "./Message";

function DemoMemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrémenter: {count}</button>
      <Message text="Bonjour!" />
    </div>
  );
}

export default DemoMemo;
