/** @jsx jsx */
import { Box, Flex, Grid, Heading, jsx } from "theme-ui";
import React from "react";
import Layout from "../layouts/layout";
import { useSpring, animated, config, easings } from "react-spring";
import IntroText from "../animations/intro";
import { Slide } from "react-reveal";
import { LightSpeed } from "react-reveal";
import { Parallax } from "react-scroll-parallax";
import { keyframes } from "@emotion/react";
import RollingText from "../animations/rolling-text";
import BgImage from "../background-image/bg-image";
import { StaticImage } from "gatsby-plugin-image";
export type HomeHeroProps = {};
export const HomeHero: React.FC<HomeHeroProps> = ({}) => {
  const slowZoom = keyframes({
    from: { transform: "scale(1, 1)" },
    to: { transform: "scale(1.1, 1.1)" },
  });

  return (
    <Box
      as="section"
      sx={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      <Grid>
        <BgImage>
          <StaticImage
            sx={{
              animation: `30s ease 0s normal none running ${slowZoom}`,
            }}
            src="../../images/mona-1.jpg"
            alt="hero background"
            objectFit="cover"
            objectPosition="center top"
            loading="eager"
            placeholder="blurred"
          />
        </BgImage>

        <Grid sx={{ position: "relative", gridArea: "1/1" }}>
          <Flex variant="hero.default">
            <Flex as="h2" sx={{ flexDirection: "column" }}>
              <Flex sx={{ justifyContent: "flex-end" }}>
                <Box>
                  Hi, my name is <strong>Simon Turk </strong>
                </Box>
              </Flex>
              <Flex sx={{ justifyContent: "flex-end" }}>
                <Box pr={[3]}>and I am a</Box>
                <RollingText>
                  <Box color="primary">Project Manager</Box>
                  <Box color="primary">Product Manager</Box>
                  <Box color="primary">Business Analyst</Box>
                  <Box color="primary">Developer</Box>
                  <Box color="primary">Designer</Box>
                </RollingText>
              </Flex>
            </Flex>
          </Flex>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeHero;

//  <animated.div style={fadeIn}> Challenge Accepted</animated.div>

//  <Heading as="h2">
//    <animated.div style={fadeIn}> Challenge Accepted</animated.div>
//  </Heading>;

/*

  <LightSpeed left>
        <Heading as="h2" sx={{ width: "fit-content" }}>
          Challenge
        </Heading>
      </LightSpeed>
      <Parallax translateX={[20, 100]}>
        <LightSpeed right>
          <Heading as="h2" sx={{ width: "fit-content" }}>
            Accepted
          </Heading>
        </LightSpeed>
      </Parallax>






<Flex
      variant="hero.default"
      sx={{
        flexDirection: "column",
        //height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Heading as="h2">
       
      </Heading>
    </Flex>

 <IntroText delay={0} duration={1500}>
          Challenge
        </IntroText>
        <IntroText delay={0} duration={1500}>
          Accepted
        </IntroText>

*/
