import axios from "axios";
import React from "react";
import ResidentInfo from "./ResidentInfo";

const ResidentList = ({ location }) => {
  return (
    <div className="ResidentList">
      {location?.residents?.map((url) => (
        <ResidentInfo url={url} key={url} />
      ))}
    </div>
  );
};

export default ResidentList;
