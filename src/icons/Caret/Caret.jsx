/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Caret = ({ color = "#6750A4", className }) => {
  return (
    <svg
      className={`caret ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 2 18"
      width="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M1 1V17" stroke={color} strokeLinecap="square" />
    </svg>
  );
};

Caret.propTypes = {
  color: PropTypes.string,
};
