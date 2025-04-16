import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef((props: any, ref: any) => {
  const inputRef = useRef<any>(null);
  useImperativeHandle(ref, () => ({

  }));
  return (
    <div>
      <input ref={ref} />
    </div>
  );
})

export default Input;
