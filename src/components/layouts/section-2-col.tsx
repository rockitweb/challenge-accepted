/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui";
import React, { Children } from "react";

export type Section2ColProps = { reverse: boolean; makeSticky?: boolean };
export const Section2Col: React.FC<Section2ColProps> = ({
  reverse = false,
  children,
  makeSticky = true,
}) => {
  const childArray = Children.toArray(children);
  const HEIGHT = ["400px"];

  return (
    <Flex
      as="section"
      py={[]}
      sx={{ minHeight: HEIGHT, flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <Box
        variant={makeSticky ? "layout.section.stickyCol" : "layout.section.centeredCol"}
      >
        {childArray[0]}
      </Box>
      <Box variant="layout.section.col">{childArray[1]}</Box>
    </Flex>
  );
};

export default Section2Col;
