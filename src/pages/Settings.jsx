import React from "react";
import { useRoutes } from "react-router-dom";
import SettingsAcquirers from "../features/settings/SettingsAcquirers";
import SettingsChipProviders from "../features/settings/SettingsChipProviders";
import SettingsConnectivities from "../features/settings/SettingsConnectivities";
import SettingsLocations from "../features/settings/SettingsLocations";
import SettingsMakes from "../features/settings/SettingsMakes";
import SettingsStatuses from "../features/settings/SettingsStatuses";

function Settings() {
  const routes = useRoutes([
    {
      path: "/acquirers",
      element: <SettingsAcquirers />,
    },
    {
      path: "/locations",
      element: <SettingsLocations />,
    },
    {
      path: "/statuses",
      element: <SettingsStatuses />,
    },
    {
      path: "/makes",
      element: <SettingsMakes />,
    },
    {
      path: "/connectivities",
      element: <SettingsConnectivities />,
    },
    {
      path: "/chip-providers",
      element: <SettingsChipProviders />,
    },
  ]);
  return <div>{routes}</div>;
}

export default Settings;
