import React from "react";

const Location = ({ location }) => {
  return (
    <div className="containerLocation">
      <div className="infoLocation">
        <div className="locationName">
          <h1>{location?.name}</h1>
        </div>
        <div className="descriptionLocation">
          <div className="DescriptionSpecific">
            <b>Type</b>
            {location?.type}
          </div>
          <div className="DescriptionSpecific">
            {" "}
            <b>Dimension</b>
            {location?.dimension}
          </div>
          <div className="DescriptionSpecific">
            <b>Residents</b>
            {location?.residents?.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
