/** @jsx jsx */
import { Box, Flex, Grid, Heading, jsx, Paragraph, Text } from "theme-ui";
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
import Section2Col from "../layouts/section-2-col";
export type MeetMeProps = {};
export const MeetMe: React.FC<MeetMeProps> = ({}) => {
  //const { ref } = useParallax({ speed: 100 });

  const HEIGHT = ["976px"];

  return (
    <Section2Col>
      <Flex
        py={[5]}
        sx={{
          flexDirection: "column",
          height: HEIGHT,
          alignItems: "center",
          justifyContent: "space-between",
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
          sx={{
            borderRadius: "8px",
            border: " 2px solid #FFFFFF",
            filter: "drop-shadow(4px 4px 10px rgba(255, 255, 255, 0.45))",
          }}
        />

        <Text mt={[4]} variant="heading.white" sx={{ letterSpacing: ".5em" }}>
          about
        </Text>
        <Grid columns={3} sx={{ textAlign: "center" }}>
          <Paragraph variant="muted">
            <Box as="strong">20+</Box> <br />
            years IT Experience
          </Paragraph>
          <Paragraph variant="muted">
            <Box as="ul">
              <Box as="li">fintech</Box>
              <Box as="li">wealth</Box>
              <Box as="li">health</Box>
              <Box as="li">utilities</Box>
            </Box>
          </Paragraph>
          <Paragraph variant="muted">millions in projects delivered</Paragraph>
        </Grid>
      </Flex>
      <Box>
        <Text variant="bold">
          I am a multidisciplined IT/Business professional living in Hobart,
          Tasmania
        </Text>
        <Paragraph pt={2}>
          A hectic, but rewarding 20+ years, cutting code, running development
          teams, and managing projects for some of the finest wealth management
          companies in Australia was the gateway to my own company
        </Paragraph>
        <Heading variant="heading.primary">Project Delivery</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Heading variant="heading.primary">Software Development</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Paragraph pt={2}>
          A hectic, but rewarding 20+ years, cutting code, running development
          teams, and managing projects for some of the finest wealth management
          companies in Australia was the gateway to my own company
        </Paragraph>
        <Heading variant="heading.primary">Project Delivery</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Heading variant="heading.primary">Software Development</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Paragraph pt={2}>
          A hectic, but rewarding 20+ years, cutting code, running development
          teams, and managing projects for some of the finest wealth management
          companies in Australia was the gateway to my own company
        </Paragraph>
        <Heading variant="heading.primary">Project Delivery</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Heading variant="heading.primary">Software Development</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Paragraph pt={2}>
          A hectic, but rewarding 20+ years, cutting code, running development
          teams, and managing projects for some of the finest wealth management
          companies in Australia was the gateway to my own company
        </Paragraph>
        <Heading variant="heading.primary">Project Delivery</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Heading variant="heading.primary">Software Development</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Paragraph pt={2}>
          A hectic, but rewarding 20+ years, cutting code, running development
          teams, and managing projects for some of the finest wealth management
          companies in Australia was the gateway to my own company
        </Paragraph>
        <Heading variant="heading.primary">Project Delivery</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Heading variant="heading.primary">Software Development</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
      </Box>
    </Section2Col>
  );


  return (
    <Flex
      as="section"
      variant="layout.boxx"
      py={[4]}
      sx={{ minHeight: HEIGHT }}
    >
      <Box
        sx={{
          width: ["50%"],

          position: "sticky",
          top: "0px",
          alignSelf: "flex-start",
          overflowY: "auto",
        }}
      >
     
      </Box>

      <Flex
        color="white"
        sx={{
          flexDirection: "column",
          width: ["50%"],
          fontSize: [4],
          letterSpacing: [2],
          justifyContent: "center",
        }}
      >
        <Text variant="bold">
          I am a multidisciplined IT/Business professional living in Hobart,
          Tasmania
        </Text>
        <Paragraph pt={2}>
          A hectic, but rewarding 20+ years, cutting code, running development
          teams, and managing projects for some of the finest wealth management
          companies in Australia was the gateway to my own company
        </Paragraph>
        <Heading variant="heading.primary">Project Delivery</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Heading variant="heading.primary">Software Development</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Paragraph pt={2}>
          A hectic, but rewarding 20+ years, cutting code, running development
          teams, and managing projects for some of the finest wealth management
          companies in Australia was the gateway to my own company
        </Paragraph>
        <Heading variant="heading.primary">Project Delivery</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Heading variant="heading.primary">Software Development</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Paragraph pt={2}>
          A hectic, but rewarding 20+ years, cutting code, running development
          teams, and managing projects for some of the finest wealth management
          companies in Australia was the gateway to my own company
        </Paragraph>
        <Heading variant="heading.primary">Project Delivery</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Heading variant="heading.primary">Software Development</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Paragraph pt={2}>
          A hectic, but rewarding 20+ years, cutting code, running development
          teams, and managing projects for some of the finest wealth management
          companies in Australia was the gateway to my own company
        </Paragraph>
        <Heading variant="heading.primary">Project Delivery</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Heading variant="heading.primary">Software Development</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Paragraph pt={2}>
          A hectic, but rewarding 20+ years, cutting code, running development
          teams, and managing projects for some of the finest wealth management
          companies in Australia was the gateway to my own company
        </Paragraph>
        <Heading variant="heading.primary">Project Delivery</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
        <Heading variant="heading.primary">Software Development</Heading>
        <Paragraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Paragraph>
      </Flex>
    </Flex>
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
