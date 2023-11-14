import { useState } from "react";
import { cva } from "class-variance-authority";

const textareaStyles = cva([
  "grow",
  "resize-none",
  "rounded-md",
  "text-md",
  "px-3",
  "py-1",
  "placeholder:font-light",
  "placeholder:text-md",
  "placeholder:italic",
  "focus:outline-none",
]);

const buttonStyles = cva([
  "px-6",
  "h-full",
  "bg-sky-700",
  "border-blue-950",
  "border-2",
  "text-white",
  "disabled:bg-slate-400",
  "disabled:border-slate-500",
  "hover:bg-sky-400",
  "hover:border-blue-500",
  "rounded-lg",
]);

interface MessageDraftProps {
  sendMessage?: (message: string) => void;
  resetChatAfterSend?: boolean;
}

const MessageDraft = ({
  sendMessage,
  resetChatAfterSend = true,
}: MessageDraftProps) => {
  const [chatMessage, setChatMessage] = useState<string>("");

  const emptyTextbox = chatMessage === "";
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setChatMessage(event.target.value);

  const submitMessage = () => {
    if (chatMessage === "") return;
    if (sendMessage) sendMessage(chatMessage);
    if (resetChatAfterSend) setChatMessage("");
  };

  return (
    <div className="flex flex-row gap-3">
      <textarea
        className={textareaStyles()}
        placeholder={`Type a message to be sent`}
        value={chatMessage}
        onChange={onChange}
      />
      <button
        className={buttonStyles()}
        disabled={emptyTextbox}
        onClick={submitMessage}
      >
        Send
      </button>
    </div>
  );
};

export default MessageDraft;
