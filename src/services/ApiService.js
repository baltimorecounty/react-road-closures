import { Config } from "@baltimorecounty/javascript-utilities";
import axios from "axios";
//import data from "./data/test.json";
const { getValue } = Config;

/**
 * Determines if api is up or not
 * @returns true if the api is available
 */
// const GetStatus = () =>
//   axios
//     .get(
//       `https://bcgis.baltimorecountymd.gov/arcgis/rest/services/Apps/RoadClosureProd/MapServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=CLOSURE_ID%2CFIRST_ROAD_CLOSURE_DATE%2CFIRST_CLOSURE_TYPE%2CFIRST_STLABEL%2CFIRST_INTERSECTIONLIST%2CFIRST_COMMUNITY"/status`
//     )
//     .then(({ status }) => status === 200);


const GetClosings = async () => {

  return await axios
    .get(
      `https://bcgis.baltimorecountymd.gov/arcgis/rest/services/Apps/RoadClosureProd/MapServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=CLOSURE_ID%2CFIRST_ROAD_CLOSURE_DATE%2CFIRST_CLOSURE_TYPE%2CFIRST_STLABEL%2CFIRST_INTERSECTIONLIST%2CFIRST_COMMUNITY`
    )
    .then(({ status, data }) => (status === 200 ? data : []));
};

export {  GetClosings };
