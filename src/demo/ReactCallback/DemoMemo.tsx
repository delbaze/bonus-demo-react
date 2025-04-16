import { useCallback, useState } from "react";
import Message from "./Message";

function DemoMemo() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("COUCOU");
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrémenter: {count}</button>
      <Message text="Bonjour!" onClick={handleClick} />
    </div>
  );
}

export default DemoMemo;
