/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui";
import React from "react";
import Logo from "./logo";

export type BrandProps = {};
export const Brand: React.FC<BrandProps> = ({}) => {
  return (
    <Flex sx={{ alignItems: ["center"] }}>
      <Logo />
      <Flex pl={[2]} sx={{ flexDirection: "column", justifyContent: "center" }}>
        <Box variant="brand.line1">simon</Box>
        <Box variant="brand.line2">turk</Box>
      </Flex>
    </Flex>
  );
};

export default Brand;
