import React from "react";
import { useRoutes } from "react-router-dom";

import ChipsAdd from "../features/chips/ChipsAdd";
import ChipsList from "../features/chips/ChipsList";

function Chips() {
  const routes = useRoutes([
    {
      path: "/list",
      element: <ChipsList />,
    },
    {
      path: "/add",
      element: <ChipsAdd />,
    },
  ]);
  return <div>{routes}</div>;
}

export default Chips;
