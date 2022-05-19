/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import Brand from "./brand";
import TopNav from "./nav/top-nav";

export type HeaderProps = {};
export const Header: React.FC<HeaderProps> = ({}) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 45;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Flex
      py={[1]}
      bg={scrolled ? "black" : "transparent"}
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 10,
        justifyContent: ["space-between"],
      }}
    >
      <Flex variant="layout.box">
        <Box sx={{ flex: 1 }}>
          <Brand />
        </Box>

        <TopNav showHamburger={scrolled} />
      </Flex>
    </Flex>
  );
};

export default Header;
