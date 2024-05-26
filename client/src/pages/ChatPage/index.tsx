import { Outlet } from "react-router-dom";

import Navbar from "@src/components/Navbar";

const ChatPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="overflow-y-hidden"> {/* I have no idea how this works */}
        <Outlet />
      </main>
    </>
  );
};

export default ChatPage;
