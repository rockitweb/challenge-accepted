/** @jsx jsx */
import { Box, Heading, jsx } from "theme-ui";
import React from "react";
import Header from "../header";

export type LayoutProps = {};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box as="main" bg="bg" sx={{}}>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
