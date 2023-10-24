import { useParams, Navigate } from "react-router-dom";

const ChatroomPage = () => {
	const { roomId } = useParams();

	if (roomId === undefined) {
		return <Navigate to="/home" />;
	}

    // start a socket listener using the roomId
	return <div>This is a chatroom, with roomId: {roomId}</div>;
};

export default ChatroomPage;
