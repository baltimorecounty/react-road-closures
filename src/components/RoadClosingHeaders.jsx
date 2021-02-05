import React from "react";
import {
  TableHead,
  TableHeadCell,
  TableRow,
} from "@baltimorecounty/dotgov-components";

const RoadClosingHeaders = (props) => {
  return (
    <TableHead>
      <TableRow>
        <TableHeadCell key="RoadHeader" className="order-by">
          Road
        </TableHeadCell>
        <TableHeadCell key="CommunityHeader">Community</TableHeadCell>
        <TableHeadCell key="ReasonHeader">Reason</TableHeadCell>
        <TableHeadCell key="ClosedHeader">Closed</TableHeadCell>
        <TableHeadCell key="IntersectionHeader">Intersection</TableHeadCell>
      </TableRow>
    </TableHead>
  );
};

export default RoadClosingHeaders;
