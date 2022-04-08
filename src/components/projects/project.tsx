/** @jsx jsx */
import { Flex, Grid, jsx, Paragraph, Text } from "theme-ui";
import React from "react";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import BgImage from "../background-image/bg-image";

export type ProjectProps = {
  gatsbyImageData: IGatsbyImageData;
  heading: string;
  subheading: string;
};
export const Project: React.FC<ProjectProps> = ({
  gatsbyImageData,
  heading,
  subheading,
}) => {
  return (
    <Grid>
      <BgImage>
        <GatsbyImage
          image={gatsbyImageData}
          alt={heading}
          objectFit="cover"
          objectPosition="center center"
          loading="lazy"
        />
      </BgImage>

      <Grid sx={{ position: "relative", gridArea: "1/1" }}>
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
            {heading}
          </Text>
          <Paragraph variant="small">{subheading}</Paragraph>
        </Flex>
      </Grid>
    </Grid>
  );
};

export default Project;
