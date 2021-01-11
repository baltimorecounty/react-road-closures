import React from "react";
import {
  SideBarSection,
  SummaryList,
} from "@baltimorecounty/dotgov-components";

const departmentSummaryItems = [
  {
    id: 1,
    icon: "fas fa-map-marker-alt",
    heading: "",
    content: "<p> Quickly report problems or request a service.</p>",
  },
  {
    id: 2,
    icon: "fas fa-mobile-alt",
    heading: "Phone:",
    content: "<a href='tel:311'>311</a>",
  },
  {
    id: 3,
    icon: "fas fa-link",
    heading: "Website:",
    content:
      "<p><a href='/report-problem?categoryID=1011065#/'>Report a problem</a></p>",
  },
  {
    id: 4,
    icon: "fa-fw fas fa-download",
    heading: "Download",
    content:
      "<p><a href='https://play.google.com/store/apps/details?id=com.citysourced.baltimorecountymd&hl=en'>Google Play</a></p><p><a href='https://itunes.apple.com/us/app/baltcogo/id1200046300'>Apple</a></p>",
  },
];

const socialMediaSummaryItems = [
  {
    id: 1,
    icon: "dg_icon fab fa-twitter",
    heading: "Twitter",
    content:
      "<p><a href='https://twitter.com/BACOemergency'>Follow @BaCoEmergency</a></p>",
  },
];

const RoadClosingSidebar = () => {
  const sideBarContactUs = <SummaryList items={departmentSummaryItems} />;
  const sideBarSocialMedia = <SummaryList items={socialMediaSummaryItems} />;
  return (
    <div className="dg_sidebar">
      <SideBarSection title="Related Links">
        <ul className="dg_alt-list">
          <li>
            <a href="/News/weather/policies.html">
              Severe Weather and Closings Policies
            </a>
          </li>
          <li>
            <a href="News/weather/inclementweather.html">
              Employee Inclement Weather Policy
            </a>
          </li>
        </ul>
      </SideBarSection>
      <SideBarSection title="BALTCO 311">{sideBarContactUs}</SideBarSection>
      <SideBarSection title="Follow Us">{sideBarSocialMedia}</SideBarSection>
    </div>
  );
};

export default RoadClosingSidebar;
