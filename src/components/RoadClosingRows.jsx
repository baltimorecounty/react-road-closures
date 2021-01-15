import React from "react";
import { TableCell, TableRow } from "@baltimorecounty/dotgov-components";

const RoadClosingRows = (props) => {
  const { data } = props;

  return data.features.map((item, i) => (
    <TableRow key={`tr-${i}`} id={i}>
      <TableCell key={`tdRoad-${i}`}>
        {item["attributes"]["FIRST_STLABEL"]}
      </TableCell>
      <TableCell key={`tdCommunity-${i}`}>
        {item["attributes"]["FIRST_COMMUNITY"]}
      </TableCell>
      <TableCell key={`tdType-${i}`}>
        {item["attributes"]["FIRST_CLOSURE_TYPE"]}
      </TableCell>
      <TableCell key={`tdDate-${i}`}>
        {" "}
        {item["attributes"]["FIRST_ROAD_CLOSURE_DATE"]}
      </TableCell>
      <TableCell key={`tdIntersection-${i}`}>
        {" "}
        {item["attributes"]["FIRST_INTERSECTIONLIST"]}
      </TableCell>
    </TableRow>
  ));
};

export default RoadClosingRows;
