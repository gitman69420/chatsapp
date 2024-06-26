// Single Responsibility - house the chat messages flow and message draft components
import MessageFlow from "./MessageFlow";
import MessageDraft from "@src/components/ChatRoom/MessageDraft";

// interface ChatRoomProps {}

const ChatRoom = () => {
  return (
    <>
      <div
        id="main-content"
        className="flex flex-col h-full w-full bg-gray-300 p-3 gap-3"
      >
        <MessageFlow />
        <MessageDraft
          onSend={message => {
            console.log("Sending message", message);
          }}
          resetChatAfterSend
        />
      </div>
    </>
  );
};

export default ChatRoom;
