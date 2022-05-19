/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import React from "react";
import Fade from "react-reveal/Fade";
import { Icon } from "@iconify/react";

export type ListItemProps = {};
export const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return (
    <Box as="li">
      <Icon sx={{ color: "primary" }} icon="mi:arrow-right" height="16" />{" "}
      {children}
    </Box>
  );
};

export default ListItem;
