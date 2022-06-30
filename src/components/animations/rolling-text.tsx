/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import React, { Children, useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import Fade from "react-reveal/Fade";

export type RollingTextProps = {};
export const RollingText: React.FC<RollingTextProps> = ({ children }) => {
  const [activeElement, setactiveElement] = useState(0);

  const childrenArray = Children.toArray(children);

  const poo = activeElement;
  useEffect(() => {
    const interval = setInterval(() => {
      setactiveElement((prevActive) =>
        prevActive === childrenArray.length - 1 ? 0 : prevActive + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      {Children.map(childrenArray, (child, index) => (
        <Box sx={{ display: activeElement === index ? "block" : "none" }}>
          <Fade duration={2000}>{child}</Fade>
        </Box>
      ))}
    </Box>
  );
};

export default RollingText;
