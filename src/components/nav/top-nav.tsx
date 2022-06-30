/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Fade from "react-reveal/Fade";
import { Link } from "gatsby";

export type TopNavProps = { showHamburger: boolean };
export const TopNav: React.FC<TopNavProps> = ({ showHamburger }) => {
  const [showMenu, setShowMenu] = useState(!showHamburger);
  const navItems = (
    <>
      <Box variant="nav.item">
        <Link to="#about">about</Link>
      </Box>
      <Box variant="nav.item">
        <Link to="#projects">projects</Link>
      </Box>
      <Box variant="nav.item">
        <Link to="#contact">contact</Link>
      </Box>
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
