/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import React from "react";
import { useSpring, easings, animated } from "react-spring";
import { keyframes } from "@emotion/react";
export type IntroTextProps = { delay: number; duration: number };
export const IntroText: React.FC<IntroTextProps> = ({
  delay,
  duration,
  children,
}) => {
  const { x } = useSpring({
    from: { x: 0 },
    x: 1,
    delay: delay,
    config: {
      duration: duration,
      easing: easings.easeInSine,
    },
  });

  const fadeIn = keyframes({
    "0%": {
      filter: "blur(10px)",
      letterSpacing: "70px",
      opacity: 0,
    },
    "50%": {
      filter: "blur(5px)",
      letterSpacing: "14px",
      opacity: 0.8,
    },
    "85%": {
      filter: "blur(2px)",
      letterSpacing: "8px",
      opacity: 0.8,
    },
    "90%": {
      filter: "blur(0px)",
      letterSpacing: "4px",
      opacity: 1,
    },
  });

  const annimationSteps = [0, 0.5, 0.8, 0.9, 1];
  const animation = {
    //opacity: x.to({ range: annimationSteps, output: [0, 0.8, 0.8, 1] }),
    filter: x.to({
      range: annimationSteps,
      output: [
        "blur(10px)",
        "blur(5px)",
        "blur(2px)",
        "blur(1px)",
        "blur(0px)",
      ],
    }),
    letterSpacing: x.to({
      range: annimationSteps,
      output: ["70px", "14px", "10px", "8px", "5px"],
    }),
  };
  return (
    <Box sx={{ animation: `${fadeIn} 5.2s linear forwards` }}>{children}</Box>
  );
  //return <animated.div style={animation}>{children}</animated.div>;
};

export default IntroText;
