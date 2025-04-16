import { memo } from "react";

const Message = memo(({ text }: { text: string }) => {
  return <p>{text}</p>;
});

export default Message;
