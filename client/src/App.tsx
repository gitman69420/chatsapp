import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";

import Home from "@src/pages/Home";
import ChatPage from "@src/pages/ChatPage";
import RandomChat from "./pages/ChatPage/RandomChat";
import ChatroomPage from "./pages/ChatPage/ChatroomPage";
import "@src/index.css";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Navigate to="/home" />,
		},
		{
			path: "home",
			element: <Home />,
		},
		// navigating to "/chat" should fetch a random roomId and navigate to "/chat/<roomId>"
		{
			path: "chat",
			element: <ChatPage />,
			children: [
				{
					index: true,
					element: <RandomChat />,
				},
				{
					path: ":roomId",
					element: <ChatroomPage />,
				},
			],
		},
		{
			path: "*",
			element: <>404: not found</>,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
