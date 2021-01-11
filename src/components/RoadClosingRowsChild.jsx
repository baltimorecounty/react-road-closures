import React from "react";
import ReactHtmlParser from "react-html-parser";
import {
  TableCell,
  TableRow,
  TableBody
} from "@baltimorecounty/dotgov-components";
import RoadClosingIcon from "./RoadClosingIcon";

const divStyles1 = {
  paddingLeft: "150px",
  display: "none"
};

const RoadClosingRowsChild = props => {
  const { data, cnt } = props;
  console.log("data:" + JSON.stringify(data));
  return (
 
    <tr
      key={`tr-child-${cnt}`}
      id={`child-${cnt}`}
      className={`child-${cnt}`}
      style={divStyles1}
    >
      <td key={`tdChildIcon-${cnt}`} className=""></td>
      <td key={`tdChildfirstname-${cnt}`}>{data.CLOSURE_ID}</td>
      <td key={`tdChildCol3-${cnt}`} className="">
        &nbsp;
      </td>
      <td key={`tdChildICol4-${cnt}`} className="">
        &nbsp;
      </td>
    </tr>
  );
};

export default RoadClosingRowsChild;
