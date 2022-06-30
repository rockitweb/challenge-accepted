
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Project from "./project";



export type ProjectPlanfocusProps = {  }
export const ProjectPlanfocus: React.FC<ProjectPlanfocusProps> = ({  }) => {
  
      const imageData = useStaticQuery(imageQuery);
      const image = getImage(imageData.file);
      return (
        <Project
          gatsbyImageData={image}
          heading={"Plan Focus"}
          subheading={"Integration"}
        />
      );
};

export default ProjectPlanfocus  ;
const imageQuery = graphql`
  query PlanfocusProject {
    file(name: { eq: "integration" }) {
      childImageSharp {
        gatsbyImageData(height: 400)
      }
    }
  }
`;