import { useEffect, useState } from "react";
import claudeImg from "./assets/claude.png";
import StartChat from "./startchat.jsx";
import RecentChats from "./recentchats.jsx";
import SideBar from "./sidebar.jsx";
import Chat from "./chat.jsx";
import Home from "./home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const [isPinned, setIsPinned] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home isPinned={isPinned} setIsPinned={setIsPinned} />,
    },
    {
      path: "/chat",
      element: <Chat isPinned={isPinned} setIsPinned={setIsPinned} />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
