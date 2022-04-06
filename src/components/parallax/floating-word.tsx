/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { CSSEffect, EffectString } from "parallax-controller";

export type FloatingWordProps = {
  top: string;
  left: string;
  translateX: CSSEffect | EffectString; // string[] | number[];
  translateY: CSSEffect | EffectString;
};
export const FloatingWord: React.FC<FloatingWordProps> = ({
  top,
  left,
  translateX,
  translateY,
  children,
}) => {
  return (
    <Box sx={{ position: "absolute", top: top, left: left }}>
      <Parallax translateX={translateX} translateY={translateY}>
        {children}
      </Parallax>
    </Box>
  );
};

export default FloatingWord;
