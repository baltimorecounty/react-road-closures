// import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import React from "react";
import { Run } from "./startup";
import RoadClosingPage from "./components/RoadClosingPage";

Run();

function App() {
  // console.log("data:" + JSON.stringify(data));
  return <RoadClosingPage />;
}

export default App;
