/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export const Asterisk: React.FC = () => {
  return (
    <svg
      sx={{ stroke: "primary",  width: ".4rem" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
    >
      <path d="M4 0.5 L 4 7.5" />
      <path d="M1 2 L 7 6" />
      <path d="M7 2 L 1 6" />
    </svg>
  );
};

export default Asterisk;
