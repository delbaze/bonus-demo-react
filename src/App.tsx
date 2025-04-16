import "./App.css";

import Toggle from "./demo/CompoundComponents/DemoCompound";
// import DemoUseMemo from "./demo/ReactUseMemo/DemoUseMemo";
// import MonComposant from "./demo/RenderProps/MonComposant";
// import withMyArray from "./demo/HOC/withMyArray";

// const MonComposantAvecHOC = withMyArray(MonComposant);

function App() {
  return (
    <div>
      {/* <MonComposant />       */}
      {/* <DemoMemo /> */}
      {/* <DemoUseMemo /> */}
      {/* <DemoMemo /> */}
      {/* <UseRefDemo /> */}
      <Toggle>
        <Toggle.ToggleButton />
        <Toggle.ToggleStatus />
      </Toggle>
    </div>
  );
}

export default App;
