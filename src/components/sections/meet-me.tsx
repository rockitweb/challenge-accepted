/** @jsx jsx */
import { Box, Flex, Grid, jsx, Paragraph, Text } from "theme-ui";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import RollingText from "../animations/rolling-text";
import { Parallax, useParallax } from "react-scroll-parallax";
import Bounce from "react-reveal/Bounce";
import { Fade } from "react-reveal";
import { Container } from "../parallax/container";
import FloatingWord from "../parallax/floating-word";
import { ScrollContainer } from "../parallax/scroll-container";
import Social from "../social";
export type MeetMeProps = {};
export const MeetMe: React.FC<MeetMeProps> = ({}) => {
  //const { ref } = useParallax({ speed: 100 });

  return (
    <Grid columns={2} variant="layout.box" sx={{ position: "relative" }}>
      <Flex
        sx={{
          flexFlow: "column wrap",
          //height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Parallax
          opacity={[0.5, 1]}
          translateX={[-80, 0]}
          startScroll={0}
          endScroll={800}
        >
          <Flex
            sx={{
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              position: "relative",
            }}
          >
            <StaticImage
              src="../../images/simon.png"
              alt="Simon's Head shot"
              placeholder="blurred"
              layout="fixed"
              transformOptions={{ grayscale: true }}
              width={200}
              height={200}
              sx={{ borderRadius: "8px" }}
            />

            <Text variant="heading.muted">Simon Turk</Text>
            <RollingText>
              <Text variant="heading.small">Senior IT Pro</Text>
              <Text variant="heading.small">Project Manager</Text>
              <Text variant="heading.small">Developer</Text>
              <Text variant="heading.small">Designer</Text>
              <Text variant="heading.small">Entrepreneur</Text>
            </RollingText>
            <Social />
          </Flex>
        </Parallax>
      </Flex>
      <Parallax
        opacity={[0, 1]}
        translateX={[80, 0]}
        startScroll={0}
        endScroll={800}
      >
        <Flex
          color="white"
          sx={{
            flexDirection: "column",
            width: ["100%", "100%"],
            fontSize: [4],
            letterSpacing: [2],
            justifyContent: "center",
          }}
        >
          <Paragraph>
            Hi, I'm Simon Turk, and I accept your challenge. From humble
            beginnings in picturesque Tasmania, to corporate life in Sydney and
            back again, I have accrued over 20 years experience in software
            development, project management and so much more in between. I am
            uniquly placed to work with you and your company to tackle your
            unique project.
          </Paragraph>
          <Paragraph pt={2}>
            Scroll on to learn more about me or jump right in and contact me.
          </Paragraph>
        </Flex>
      </Parallax>
    </Grid>
  );
};

export default MeetMe;

/*
    <RollingText>
            <Text variant="heading.primary">Senior IT Pro</Text>
            <Text variant="heading.primary">Project Manager</Text>
            <Text variant="heading.primary">Developer</Text>
            <Text variant="heading.primary">Designer</Text>
            <Text variant="heading.primary">Entrepreneur</Text>
          </RollingText>
*/
