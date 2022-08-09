import React from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider, teamsTheme } from "@fluentui/react-northstar";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import { useTeams } from "msteams-react-base-component";
import Hope from "./Hope";
import Form from "./Form";
/**
 * The main app which handles the initialization and routing
 * of the app.
 */
 export default function App() {
  const { theme } = useTeams({})[0];
  return (
    <div>
      <Form/>
    </div>
  );
}
