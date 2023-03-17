import React from "react";
import { useRoutes } from "react-router-dom";
import TerminalsAdd from "../features/terminals/TerminalsAdd";
import TerminalsList from "../features/terminals/TerminalsList";

function Terminals() {
  const routes = useRoutes([
    {
      path: "/list",
      element: <TerminalsList />,
    },
    {
      path: "/add",
      element: <TerminalsAdd />,
    },
  ]);
  return <div>{routes}</div>;
}

export default Terminals;
