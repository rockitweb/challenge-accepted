/** @jsx jsx */
import { Box, Heading, jsx } from "theme-ui";
import React from "react";

export type LayoutProps = {};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box as="main" bg="bg" sx={{ }}>
      {children}
    </Box>
  );
};

export default Layout;
