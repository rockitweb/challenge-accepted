/** @jsx jsx */
import { Box, Flex, Grid, Heading, jsx, Paragraph, Text } from "theme-ui";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ProjectCrestone from "../projects/project-crestone";
import ProjectAirportlink from "../projects/project-airportlink";
import Section2Col from "../layouts/section-2-col";
import ProjectPlanfocus from "../projects/project-planfocus";
import ProjectQsn from "../projects/project-qsn";
import ProjectTotalcareHearing from "../projects/project-totalcare-hearing";
import ProjectSeperator from "../projects/project-seperator";

export type ProjectsProps = {};
export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <Section2Col reverse={true} id="projects">
      <Flex
        sx={{
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Text mt={[]} variant="heading.white" sx={{ letterSpacing: ".5em" }}>
          projects
        </Text>
        <Paragraph variant="small">
          crestone - airport link - plan focus - QSN - totalcare hearing
        </Paragraph>
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          width: ["100%", "100%"],
          //bg: "white",
        }}
      >
        <ProjectCrestone />
        <ProjectSeperator />
        <ProjectAirportlink />
        <ProjectSeperator />
        <ProjectPlanfocus />
        <ProjectSeperator />
        <ProjectQsn />
        <ProjectSeperator />
        <ProjectTotalcareHearing />
      </Flex>
    </Section2Col>
  );

  return (
    <Grid
      as="section"
      columns={2}
      variant="layout.boxx"
      py={[4]}
      sx={{ position: "relative" }}
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
        <ProjectCrestone />
        <ProjectAirportlink />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Text mt={[4]} variant="heading.white" sx={{ letterSpacing: ".5em" }}>
          projects
        </Text>
        <Paragraph variant="small">
          crestone - airport link - plan focus - QSN - totalcare hearing
        </Paragraph>
      </Flex>
    </Grid>
  );
};

export default Projects;
