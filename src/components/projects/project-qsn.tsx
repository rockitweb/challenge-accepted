
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Project from "./project";



export type ProjectQsnProps = {  }
export const ProjectQsn: React.FC<ProjectQsnProps> = ({  }) => {
  
      const imageData = useStaticQuery(imageQuery);
      const image = getImage(imageData.file);
      return (
        <Project
          gatsbyImageData={image}
          heading={"QSN"}
          subheading={"Website/Ecommerce/Integration"}
        />
      );
};

export default ProjectQsn  ;
const imageQuery = graphql`
  query QsnProject {
    file(name: { eq: "qsn" }) {
      childImageSharp {
        gatsbyImageData(width: 1000)
      }
    }
  }
`;