import React from "react";
import ReactHtmlParser from "react-html-parser";
import {
  TableCell,
  TableRow,
  TableBody
} from "@baltimorecounty/dotgov-components";
import RoadClosingIcon from "./RoadClosingIcon";


const RoadClosingRows = props => {
  const { data } = props;

  return data.features.map((item, i) => (
    
      <TableRow key={`tr-${i}`} id={i}>
        <td
          key={`tdIcon-${i}`}
          className="toggler"
          data-road-closure={i}
          closure_date={item["attributes"]["FIRST_ROAD_CLOSURE_DATE"]}
          closure_intersection={item["attributes"]["FIRST_INTERSECTIONLIST"]}
        ></td>
        <TableCell key={`tdfirstname-${i}`}>
          {item["attributes"]["FIRST_STLABEL"]}
        </TableCell>
        <TableCell key={`tdlastname-${i}`}>
          {item["attributes"]["FIRST_COMMUNITY"]}
        </TableCell>
        <TableCell key={`tdSpostion-${i}`}>
          {item["attributes"]["FIRST_CLOSURE_TYPE"]}
        </TableCell>
      </TableRow>
  ));
};

export default RoadClosingRows;
