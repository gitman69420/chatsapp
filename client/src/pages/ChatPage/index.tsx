import { Outlet } from "react-router-dom";

import Navbar from "@src/components/Navbar";

const ChatPage = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default ChatPage;
