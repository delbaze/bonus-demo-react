import { forwardRef } from "react";

const Input = forwardRef((props: any, ref: any) => {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
})

export default Input;
