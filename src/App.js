import React from "react";
import "./App.css";
import CancelRequestExample from "./components/CancelRequestExample";
import OptimalReqExample from "./components/OptimalReqExample";
import PaginationExample from "./components/PaginationExample";

const App = () => {
  return (
    <div className="container py-5">
      {/* <CancelRequestExample /> */}
      {/* <PaginationExample /> */}
      <OptimalReqExample />
    </div>
  );
};

export default App;
