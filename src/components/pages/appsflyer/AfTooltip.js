import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

const titleToToolTip =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
  "              Accusantium amet animi beatae delectus distinctio ducimus illum\n" +
  "              impedit iste laboriosam laudantium libero, maxime modi neque";
const AfTooltip = () => {
  return (
    <>
      <h1>AfTooltip</h1>
      <h2>Right</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        amet animi beatae delectus distinctio ducimus illum impedit iste
        laboriosam laudantium libero, maxime modi neque
        <Tooltip title={titleToToolTip} arrow placement="right">
          <span> I tooltipomnis right</span>
        </Tooltip>
        pariatur porro, quia reiciendis similique.
      </p>
      <h2>Top</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        amet animi beatae delectus distinctio ducimus illum impedit iste
        laboriosam laudantium libero, maxime modi neque
        <Tooltip title={titleToToolTip} arrow placement="top">
          <span> I tooltipomnis top</span>
        </Tooltip>
        pariatur porro, quia reiciendis similique.
      </p>
    </>
  );
};

export default AfTooltip;
