/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ActiveIndicator3 = ({ color = "#6750A4", className }) => {
  return (
    <svg
      className={`active-indicator-3 ${className}`}
      fill="none"
      height="2"
      viewBox="0 0 210 2"
      width="210"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line className="line-2" stroke={color} strokeWidth="2" x2="210" y1="1" y2="1" />
    </svg>
  );
};

ActiveIndicator3.propTypes = {
  color: PropTypes.string,
};
