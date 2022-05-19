
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Project from "./project";



export type ProjectTotalcareHearingProps = {  }
export const ProjectTotalcareHearing: React.FC<ProjectTotalcareHearingProps> = ({  }) => {
  
      const imageData = useStaticQuery(imageQuery);
      const image = getImage(imageData.file);
      return (
        <Project
          gatsbyImageData={image}
          heading={"Totalcare Hearing"}
          subheading={"Website"}
        />
      );
};

export default ProjectTotalcareHearing  ;
const imageQuery = graphql`
  query TotalcareHearingProject {
    file(name: { eq: "hero-bg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;