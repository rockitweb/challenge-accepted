/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import React from "react";
import BgOverlay from "./bg-overlay";

export type BgImageProps = {};
export const BgImage: React.FC<BgImageProps> = ({ children }) => {
  return (
    <Flex
      sx={{
        position: "relative",
        justifyContent: "center",
        gridArea: "1/1",
        width: "100%",
      }}
    >
      {children}
      <BgOverlay height={["100%"]} bgColor={"overlay"} />
    </Flex>
  );
};

export default BgImage;
