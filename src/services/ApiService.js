import { Config } from "@baltimorecounty/javascript-utilities";
import axios from "axios";
//import data from "./data/test.json";
const { getValue } = Config;

/**
 * Determines if api is up or not
 * @returns true if the api is available
 */
const GetStatus = () =>
  axios
    .get(
      `https://bcgis.baltimorecountymd.gov/arcgis/rest/services/Apps/RoadClosureProd/MapServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=CLOSURE_ID%2CFIRST_ROAD_CLOSURE_DATE%2CFIRST_CLOSURE_TYPE%2CFIRST_STLABEL%2CFIRST_INTERSECTIONLIST%2CFIRST_COMMUNITY"/status`
    )
    // .get(`${getValue("apiRoot")}/status`)
    .then(({ status }) => status === 200);

/**
 * Get Closing Data from Service
 */
// const GetClosings = () =>

//   axios
//     .get(`${getValue("apiRoot")}`)
//     .then(({ status, data }) => (status === 200 ? data : []));

const test = async () => {
  console.log("in test");
  try {
    return await axios.get(
      "https://bcgis.baltimorecountymd.gov/arcgis/rest/services/Apps/RoadClosureProd/MapServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=CLOSURE_ID%2CFIRST_ROAD_CLOSURE_DATE%2CFIRST_CLOSURE_TYPE%2CFIRST_STLABEL%2CFIRST_INTERSECTIONLIST%2CFIRST_COMMUNITY"
    );
  } catch (error) {
    console.log("in error");
    console.log(error);
  }
};

const GetClosings = async () => {
  console.log("inside get closing");
  // const breeds = await test();
  // console.log("breeds:" + JSON.stringify(breeds.status));
  // breeds
  return await axios
    .get(
      `https://bcgis.baltimorecountymd.gov/arcgis/rest/services/Apps/RoadClosureProd/MapServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=CLOSURE_ID%2CFIRST_ROAD_CLOSURE_DATE%2CFIRST_CLOSURE_TYPE%2CFIRST_STLABEL%2CFIRST_INTERSECTIONLIST%2CFIRST_COMMUNITY`
    )
    .then(({ status, data }) => (status === 200 ? data : []));
  // .then(response => {
  //   if (response.data.message) {
  //     console.log(
  //       `Got ${Object.entries(response.data.message).length} breeds`
  //     );
  //   }
  // })
  // .catch(error => {
  //   console.log(error);
  // });
  //console.log("got data:" + JSON.stringify(data))
};

export { GetStatus, GetClosings };
