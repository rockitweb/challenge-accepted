/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Project from "./project";

export type ProjectAirportlinkProps = {};
export const ProjectAirportlink: React.FC<ProjectAirportlinkProps> = ({}) => {
  const imageData = useStaticQuery(imageQuery);
  const image = getImage(imageData.file);
  return (
    <Project
      gatsbyImageData={image}
      heading={"Airport Link"}
      subheading={"Website"}
    />
  );
};

export default ProjectAirportlink;

export const imageQuery = graphql`
  query AirportlinkProject {
    file(name: { eq: "airportlink" }) {
      childImageSharp {
        gatsbyImageData(width: 1000)
      }
    }
  }
`;
