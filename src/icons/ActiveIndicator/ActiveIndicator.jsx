/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ActiveIndicator = ({ color = "#1D1B20", opacity = "unset", className }) => {
  return (
    <svg
      className={`active-indicator ${className}`}
      fill="none"
      height="1"
      viewBox="0 0 210 1"
      width="210"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line className="line-2" opacity={opacity} stroke={color} x2="210" y1="0.5" y2="0.5" />
    </svg>
  );
};

ActiveIndicator.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
