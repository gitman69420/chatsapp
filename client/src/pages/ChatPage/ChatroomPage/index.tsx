import { useParams, Navigate } from "react-router-dom";
import ChatRoom from "@src/components/ChatRoom";

const ChatroomPage = () => {
  const { roomId } = useParams();

  if (roomId === undefined) {
    return <Navigate to="/home" />;
  }

  // start a socket listener using the roomId
  return (
    <>
      <ChatRoom />
    </>
  );
};

export default ChatroomPage;
