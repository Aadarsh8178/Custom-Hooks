import React from "react";
import "./App.css";
import CancelRequestExample from "./components/CancelRequestExample";
import PaginationExample from "./components/PaginationExample";

const App = () => {
  return (
    <div className="container py-5">
      {/* <CancelRequestExample /> */}
      <PaginationExample />
    </div>
  );
};

export default App;
