import { memo } from "react";

const Message = memo(
  ({ text, onClick }: { text: string; onClick: () => void }) => {
    return (
      <div>
        <p>{text}</p>
        <button onClick={onClick}>Click!</button>
      </div>
    );
  }
);

export default Message;
