import withMyArray, { TArray } from "./withMyArray";

function HOCDemo({ data }: { data: TArray }) {
  console.log({ data });
  return <div>HOCDemo</div>;
}

export default withMyArray(HOCDemo);
