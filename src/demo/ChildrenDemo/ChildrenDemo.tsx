import { Children, cloneElement, PropsWithChildren, useEffect } from "react";

function ChildrenDemo({ children }: PropsWithChildren) {
  console.log("%c⧭", "color: #00bf00", children);
  useEffect(() => {}, []);
  return (
    <div>
      ChildrenDemo
      {children}
      {Children.map(children, (child) =>
        cloneElement(child, { className: "custom" })
      )}
    </div>
  );
}

export default ChildrenDemo;
