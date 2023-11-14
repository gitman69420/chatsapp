import { Outlet } from "react-router-dom";

import Navbar from "@src/components/Navbar";

const ChatPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ChatPage;
