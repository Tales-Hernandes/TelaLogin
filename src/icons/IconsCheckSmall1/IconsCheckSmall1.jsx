/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsCheckSmall1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`icons-check-small-1 ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M10 16.9L6 12.9L7.4 11.5L10 14.1L16.6 7.5L18 8.9L10 16.9Z" fill={color} />
    </svg>
  );
};

IconsCheckSmall1.propTypes = {
  color: PropTypes.string,
};
