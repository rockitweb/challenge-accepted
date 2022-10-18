/** @jsx jsx */
import { Flex, Grid, jsx, Paragraph, Text } from "theme-ui";
import React from "react";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import BgImage from "../background-image/bg-image";
import Fade from "react-reveal/Fade";

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
  const HEIGHT = ["450px"];
  return (
    <Fade duration={4000} opposite={true}>
      <Grid
        sx={{
          position: "relative",
        }}
      >
        <BgImage overlay="overlay" height={HEIGHT}>
          <GatsbyImage
            image={gatsbyImageData}
            alt={heading}
            objectFit="cover"
            objectPosition="center top"
            loading="lazy"
            sx={{ width: "100%" }}
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
              height: "100%",
              //borderBottomColor: "white",
              //borderBottomWidth: "1px",
              //borderBottomStyle: "solid",
            }}
          >
            <Text
              mt={[4]}
              variant="heading.white"
              sx={{ letterSpacing: ".5em" }}
            >
              {heading}
            </Text>
            <Paragraph variant="small">{subheading}</Paragraph>
          </Flex>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default Project;
