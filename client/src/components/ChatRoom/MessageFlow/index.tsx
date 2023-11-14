// Single Responsibility - display the chat messages and user connection interactions to the user

import Message from "@src/types/Message";
import MessageComponent from "@src/components/ChatRoom/MessageFlow/Message";

interface MessageFlowProps {}

const messages: Message[] = [
  {
    id: "1234",
    message: "Yo, wassup",
    sender: "bingus2008",
    timestamp: new Date(),
  },
  {
    id: "1235",
    message: "How's it going?",
    sender: "bingus2008",
    timestamp: new Date(),
  },
  {
    id: "1236",
    message: "User toothpick7 has joined the chat!",
    timestamp: new Date(),
    type: "NOTIFICATION",
  },
  {
    id: "1237",
    message: "Nothing much man, how's it with you?",
    sender: "toothpick7",
    timestamp: new Date(),
    type: "SELF_MESSAGE",
  },
  {
    id: "1238",
    message: "User toothpick7 has left the chat",
    timestamp: new Date(),
    type: "NOTIFICATION",
  },
];

const MessageFlow = ({}: MessageFlowProps) => {
  return (
    <>
      <div className="flex flex-col p-2 rounded-md drop-shadow-sm bg-white grow overflow-y-auto gap-3">
        {messages.map(chat => (
          <MessageComponent message={chat} key={chat.id} />
        ))}
      </div>
    </>
  );
};

export default MessageFlow;
