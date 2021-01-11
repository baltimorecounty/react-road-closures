import { Config } from "@baltimorecounty/javascript-utilities";

const { setConfig } = Config;

const apiPath = "/api/hub/structuredContent/weather?recordsPerPage=1000";
const testApiRoot = `https://testservices.baltimorecountymd.gov${apiPath}`;
const prodApiRoot = `https://services.baltimorecountymd.gov${apiPath}`;

/**
 * Run Startup Code
 */
const Run = () => {
  // HACK - the Config utiltiy does not account for beta.
  // TODO: This will need to be addressed when we get closer to launch
  const localApiRoot =
    window.location.hostname.indexOf("beta") > -1
      ? testApiRoot
      : `https://bcgis.baltimorecountymd.gov/arcgis/rest/services/Apps/RoadClosureProd/MapServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=CLOSURE_ID%2CFIRST_ROAD_CLOSURE_DATE%2CFIRST_CLOSURE_TYPE%2CFIRST_STLABEL%2CFIRST_INTERSECTIONLIST%2CFIRST_COMMUNITY`; //`//localhost:54727/${apiPath}`;

  const configValues = {
    local: {
      apiRoot: localApiRoot,
    },
    development: {
      apiRoot: testApiRoot,
    },
    staging: {
      apiRoot: testApiRoot,
    },
    production: {
      apiRoot: prodApiRoot,
    },
  };

  setConfig(configValues);
};

export { Run };
