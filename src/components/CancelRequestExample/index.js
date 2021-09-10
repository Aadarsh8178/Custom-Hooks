import React, { useState } from "react";
import LoadPostAndComments from "./LoadList";
import LoadTiles from "./LoadTiles";

const CancelRequestExample = () => {
  const [tab, setTab] = useState("loadlist");
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-6 text-center" onClick={() => setTab("loadlist")}>
          Loadlist
        </div>
        <div className="col-6 text-center" onClick={() => setTab("loadtiles")}>
          LoadTiles
        </div>
      </div>
      <div>
        {tab === "loadlist" && <LoadPostAndComments />}
        {tab === "loadtiles" && <LoadTiles />}
      </div>
    </div>
  );
};

export default CancelRequestExample;
