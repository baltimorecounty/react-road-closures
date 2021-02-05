import React from "react";
import useRoadClosings from "../hooks/useRoadClosing";
import RoadClosingTable from "./RoadClosingTable";
import RoadClosingHeaders from "./RoadClosingHeaders";
import RoadClosingRows from "./RoadClosingRows";

// import ReactHtmlParser from "react-html-parser";
import { TableBody } from "@baltimorecounty/dotgov-components";

const RoadClosingsPage = (props) => {
  const [{ closings = [], isLoading }] = useRoadClosings();

  if (closings === undefined || closings.length === 0) {
    return (
      <p>
        We could not load information for closings. Please try again in a few
        minutes.
      </p>
    );
  } else {
    return (
      <div className="dg_internal-template">
        {isLoading ? (
          <p>{`Loading Road Closure Information...`}</p>
        ) : (
          <div id="dg_main-content">
            <RoadClosingTable>
              <RoadClosingHeaders />
              <TableBody>
                <RoadClosingRows data={closings} />
              </TableBody>
            </RoadClosingTable>
          </div>
        )}
      </div>
    );
  }
};

export default RoadClosingsPage;
