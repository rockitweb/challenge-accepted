/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui";
import React, { Children } from "react";

export type Section2ColProps = { reverse: boolean };
export const Section2Col: React.FC<Section2ColProps> = ({
  reverse = false,
  children,
}) => {
  const childArray = Children.toArray(children);
  const HEIGHT = ["976px"];

  return (
    <Flex
      as="section"
      py={[]}
      sx={{ minHeight: HEIGHT, flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <Box variant="layout.section.stickyCol">{childArray[0]}</Box>
      <Box variant="layout.section.col">{childArray[1]}</Box>
    </Flex>
  );
};

export default Section2Col;
