import { useEffect, useRef } from "react";
import Input from "./Input";

function UseRefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (inputRef.current){
        console.log("VALEUR DE l'INPUT" , inputRef.current.value);
    }
  }
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>Click</button>
      {/* <input ref={inputRef} /> */}
      <Input ref={inputRef}/>
    </div>
  );
}

export default UseRefDemo;
