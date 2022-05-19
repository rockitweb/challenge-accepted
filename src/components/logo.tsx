
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react'
import { StaticImage } from "gatsby-plugin-image";


export type LogoProps = {   }
export const Logo: React.FC<LogoProps> = ({  }) => {
  
    return (
      <StaticImage
        src="../images/logo.png"
        alt="Simon Turk Logo"
        placeholder="blurred"
        layout="fixed"
        loading="eager"
        width={50}
        height={50}
      />
    );
};

export default Logo  ;