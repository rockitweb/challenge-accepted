
/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import React from "react";

export type BgOverlayProps = { height: string[], bgColor:string };
export const BgOverlay: React.FC<BgOverlayProps> = ({ height, bgColor }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: height,
        left: 0,
        top: 0,
        bg: bgColor,
      }}
    ></Box>
  );
};

export default BgOverlay;
// `linear-gradient(0.42deg, #80C342 -4.59%, rgba(232, 244, 221, 0.31) 45%)`,