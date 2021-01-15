import React, { useEffect } from "react";
import useRoadClosings from "../hooks/useRoadClosing";
import PrimaryRoadClosing from "./PrimaryRoadClosing";
import RoadClosingTable from "./RoadClosingTable";
import RoadClosingHeaders from "./RoadClosingHeaders";
import RoadClosingRows from "./RoadClosingRows";
import RoadClosingSideBar from "./RoadClosingSideBar";
import $ from "jquery";
import DataTable from "datatables.net";
// import ReactHtmlParser from "react-html-parser";
import { TableBody } from "@baltimorecounty/dotgov-components";
import testData from "../data/test.json";
const RoadClosingsPage = props => {
  const [{ closings = [], hasError, isLoading }] = useRoadClosings();

  // const hasError = false,
  //  isLoading = false;
  // const [{ closings = [] }] = data;
  // const {
  //   programHeader,
  //   informationHeader,
  //   informationAbout
  // } = window.closings;
  useEffect(() => {
   
    window.scrollTo(0, 0);
    // Runs after the first render() lifecycle
    //initialize datatable
    $(document).ready(function() {
     // $.noConflict();
  
        console.log("there is true--");
        var $responsiveTable = $("#responsive-main-table1");
        $responsiveTable.DataTable({
          responsive: true,
          paging: false,
          ordering: true,
          searcing: true,
          info: false,
          language: {
            searchPlaceholder: "Community or Street Name",
            search:
              "Filter: Enter a community or street name to filter this list."
          },

          order: [[1, "asc"]],
          columnDefs: [
            {
              targets: 0,
              orderable: false
            }
          ]
        });
 
    });
  }, [closings]);
  // console.log("data:" + JSON.stringify(data));

  // console.log("records:" + JSON.stringify(records));
  if (closings === undefined || closings.length === 0) {
    return (
      <p>
        We could not load information for closings. Please try again in a few
        minutes.
      </p>
    );
  } else {
    const { records = [] } = closings;

    return (
      <div className="dg_internal-template">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              {isLoading ? (
                <p>{`Loading Closing Information...`}</p>
              ) : (
                <div id="dg_main-content">
                  {/* <PrimaryRoadClosing data={data} /> */}
                  {/* {ReactHtmlParser(informationHeader)}
                {ReactHtmlParser(informationAbout)}
                {ReactHtmlParser(programHeader)} */}
                  <RoadClosingTable
                    id="responsive-main-table1"
                    className="display"
                  >
                    <RoadClosingHeaders />
                    <TableBody>
                      <RoadClosingRows data={closings} />
                    </TableBody>
                  </RoadClosingTable>
                </div>
              )}
            </div>
            <div className="col-md-4 col-sm-12">
              <RoadClosingSideBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RoadClosingsPage;
