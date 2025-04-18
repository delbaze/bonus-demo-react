import "./App.css";
import CodeSplittingDemo from "./demo/CodeSplittingDemo/CodeSplittingDemo";
// import ChildrenDemo from "./demo/ChildrenDemo/ChildrenDemo";

// import Toggle from "./demo/CompoundComponents/DemoCompound";
import DemoPortals from "./demo/Portals/DemoPortals";
// import DemoUseMemo from "./demo/ReactUseMemo/DemoUseMemo";
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
      {/* <Toggle>
        <Toggle.ToggleButton />
        <Toggle.ToggleStatus />
      </Toggle> */}
      {/* <ChildrenDemo>
          <div>Toto</div>
          <DemoUseMemo />
          <p>Coucou</p>
        </ChildrenDemo> */}
        {/* <DemoPortals /> */}
        <CodeSplittingDemo />
    </div>
  );
}

export default App;
