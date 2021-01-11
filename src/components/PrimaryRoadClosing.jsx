import React from "react";
import RoadClosingIcon from "./RoadClosingIcon";

const PrimaryRoadClosing = props => {
  const { data } = props;



  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const todaysDate = new Date().toLocaleDateString(undefined, options);

  const primaryRecord = data.filter(
    ({ name }) => name === "Baltimore County Government"
  );

  return (
    <div className="closing-callout hero-unit">
      <div className="container-fluid">
        <div className="row">
          <div className="county-closings-image-container col-md-3 col-sm-3 col-md-push-9 col-sm-push-9">
            <RoadClosingIcon type={primaryRecord[0].draw} size="extraLarge" />
          </div>
          <div className="col-md-9 col-sm-9 col-md-pull-3 col-sm-pull-3">
            <h2>{primaryRecord[0].first_name}</h2>
            <div className="county-closings-status-container">
              <p>
                <strong>Status: </strong>
                {primaryRecord[0].last_name}
              </p>
              <div className="todays-date">
                <p>{todaysDate}</p>
              </div>
              <p>{primaryRecord[0].position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryRoadClosing;
