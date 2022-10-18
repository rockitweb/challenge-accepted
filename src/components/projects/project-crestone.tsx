/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Project from "./project";

export type ProjectCrestoneProps = {};
export const ProjectCrestone: React.FC<ProjectCrestoneProps> = ({}) => {
  const imageData = useStaticQuery(imageQuery);
  const image = getImage(imageData.file);
  return (
    <Project
      gatsbyImageData={image}
      heading={"Crestone"}
      subheading={"project management"}
    />
  );
};

export default ProjectCrestone;

export const imageQuery = graphql`
  query CrestoneProject {
    file(name: { eq: "project 1" }) {
      childImageSharp {
        gatsbyImageData(width: 1000)
      }
    }
  }
`;
