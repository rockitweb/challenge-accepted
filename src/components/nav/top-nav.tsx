/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Fade from "react-reveal/Fade";

export type TopNavProps = { showHamburger: boolean };
export const TopNav: React.FC<TopNavProps> = ({ showHamburger }) => {
  const [showMenu, setShowMenu] = useState(!showHamburger);
  const navItems = (
    <>
      <Box variant="nav.item">about</Box>
      <Box variant="nav.item">projects</Box>
      <Box variant="nav.item">contact</Box>
    </>
  );

  useEffect(() => {
    setShowMenu(!showHamburger);
  }, [showHamburger]);

  return (
    <Flex sx={{ alignItems: "center", cursor: "pointer" }}>
      <Fade left collapse={true} when={showMenu}>
        <Flex
          as="nav"
          variant="nav"
          sx={{
            justifyContent: "space-between",
          }}
        >
          {navItems}
        </Flex>
      </Fade>
      {showHamburger && (
        <Icon
          onClick={() => setShowMenu(!showMenu)}
          icon={showMenu ? "mi:close" : "mi:menu"}
          color="white"
          height="30"
        />
      )}
    </Flex>
  );
};

export default TopNav;
