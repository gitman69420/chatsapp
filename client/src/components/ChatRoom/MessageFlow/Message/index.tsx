import Message from "@src/types/Message";
import { cva } from "class-variance-authority";

// cva styles
const appNotification = cva([
  "self-center",
  "w-full",
  "text-sm",
  "text-center",
  "text-stone-500",
  "italic",
]);

const userMessage = cva(["sm:text-lg", "text-md", "w-full", "sm:w-2/3", "md:w-1/3", "border-b-2"], {
  variants: {
    intent: {
      regularMessage: ["text-left", "border-b-lime-900"],
      selfMessage: ["md:text-right", "border-b-lime-300", "self-end"],
    },
  },
  defaultVariants: {
    intent: "regularMessage",
  },
});

const messageLabel = cva(["text-sm", "font-bold", "italic"], {
  variants: {
    intent: {
      regularMessage: ["text-sky-800"],
      selfMessage: "",
    },
  },
  defaultVariants: {
    intent: "regularMessage",
  },
});

interface MessageProps {
  message: Message;
}

const MessageComponent = ({ message }: MessageProps) => {
  const { message: text, type } = message;

  const isAppNotification = type === "NOTIFICATION";
  if (isAppNotification) return <div className={appNotification()}>{text}</div>;

  const isFromSelf = type === "SELF_MESSAGE";
  const { sender } = message;

  const intent = isFromSelf ? "selfMessage" : "regularMessage";

  return (
    <>
      <div className={userMessage({ intent })}>
        <label className={messageLabel({ intent })}>
          {!isFromSelf ? sender : "You"}
        </label>
        <p>{text}</p>
      </div>
    </>
  );
};

export default MessageComponent;
