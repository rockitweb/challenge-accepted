/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Fade from "react-reveal/Fade";
import { Link } from "gatsby";
import * as Scroll from "react-scroll";
import { Element, scroller } from "react-scroll";

export type TopNavProps = { showHamburger: boolean };
export const TopNav: React.FC<TopNavProps> = ({ showHamburger }) => {
  const [showMenu, setShowMenu] = useState(!showHamburger);

  const handleScroll = (e: any, anchor: string) => {
    e.preventDefault();
    scroller.scrollTo(anchor, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 0, // Scrolls to element + 0 pixels down the page
    });
  };

  const navItems = (
    <>
      <Box variant="nav.item">
        <Link onClick={(e) => handleScroll(e, "about")} to="#about">
          about
        </Link>
      </Box>
      <Box variant="nav.item">
        <Link onClick={(e) => handleScroll(e, "projects")} to="#projects">
          projects
        </Link>
      </Box>
      <Box variant="nav.item">
        <Link onClick={(e) => handleScroll(e, "contact")} to="#contact">
          contact
        </Link>
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
