import React from "react";

const RoadClosingIcon = (props) => {
  const { type, size } = props;

  var iconClasses = {
    icon: {
      cancelled: "fa-times",
      closed: "fa-times",
      external: "fa-external-link",
      seewebsite: "fa-external-link",
      modified: "fa-exclamation-triangle",
      open: "fa-check",
      operating: "fa-check",
    },
    size: {
      extraSmall: "fa-1x icon-extra-small",
      small: "fa-2x icon-small",
      medium: "fa-3x icon-medium",
      large: "fa-4x icon-large",
      extraLarge: "fa-5x icon-extra-large",
    },
    cssClass: {
      tableCell: "",
    },
  };

  var newType = type.toLowerCase().replace(" ", "");
  newType = iconClasses.icon[type] ? type : "modified";

  return (
    <i
      className={`fa ${iconClasses.icon[newType]} ${iconClasses.size[size]} icon-inline icon-${newType}`}
    ></i>
  );
};

export default RoadClosingIcon;
