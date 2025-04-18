import { lazy, useState } from "react";
// import MonComposant from "./MonComposant";

const MonComposant = lazy(() => import("./MonComposant"));

function CodeSplittingDemo() {
  const [state, setState] = useState<boolean>(false);
//   const [monComposant, setMonComposant] = useState(<></>);
  const handleClick = () => {
    setState(!state);
    import("./utilities").then((module) => {
      module.maMethode();
    });
    // import("./MonComposant").then((module) => {
    //   const monCompo = module.default;
    //   setMonComposant(monCompo);
    // });
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {state && <MonComposant />}

      {/* {monComposant} */}
    </div>
  );
}

export default CodeSplittingDemo;
