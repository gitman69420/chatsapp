interface BaseMessage {
  id?: string;
  message: string;
  timestamp: Date;
}

interface RegularMessage extends BaseMessage {
  type?: "MESSAGE";
  sender: string;
}

interface AppNotification extends BaseMessage {
  type: "NOTIFICATION";
}

interface SelfMessage extends BaseMessage {
  type: "SELF_MESSAGE";
  sender: string;
}

type Message = RegularMessage | SelfMessage | AppNotification;
export default Message;
