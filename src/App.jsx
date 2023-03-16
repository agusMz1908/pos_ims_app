import "./App.css";
import { useRoutes } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";

import Home from "./pages/Home";
import Terminals from "./pages/Terminals";
import Chips from "./pages/Chips";
import NotFound404 from "./pages/NotFound404";

function App() {
  const routes = useRoutes([
    { path: "", element: <Home /> },
    { path: "terminals", element: <Terminals /> },
    { path: "chips", element: <Chips /> },
    { path: "*", element: <NotFound404 /> },
  ]);

  return (
    <div className="fixed h-screen w-screen bg-neutral-50 flex flex-col">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="fixed top-24 left-60 w-full h-full ml-8">{routes}</div>
      </div>
    </div>
  );
}

export default App;
