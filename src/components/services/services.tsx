/** @jsx jsx */
import { Flex, Grid, Heading, jsx } from "theme-ui";
import React from "react";
import Service from "./service";
import { Parallax } from "react-scroll-parallax";
import { Fade } from "react-reveal";

export type ServicesProps = {};
export const Services: React.FC<ServicesProps> = ({}) => {
  return (
    <Flex
      variant="layout.box"
      sx={{ flexDirection: "column", justifyContent: "center" }}
    >
      <Parallax opacity={[0, 1]}>
        <Heading as="h2" variant="h2" py={4} sx={{ textAlign: "center" }}>
          Services
        </Heading>
      </Parallax>
      <Grid columns={2}>
        <Parallax
          opacity={[0.5, 1]}
          translateX={[-80, 0]}
          startScroll={0}
          endScroll={800}
        >
          <Flex sx={{ justifyContent: "center" }}>
            <Service />
          </Flex>
        </Parallax>

        <Parallax
          opacity={[0, 1]}
          translateX={[80, 0]}
          startScroll={0}
          endScroll={800}
        >
          <Flex sx={{ justifyContent: "center" }}>
            <Service />
          </Flex>
        </Parallax>
      </Grid>
    </Flex>
  );
};

export default Services;

/*

 <Parallax translateX={[100, -100]}>
        <Flex sx={{ flexDirection: "row" }}>
          <Service />

          <Service />
        </Flex>
      </Parallax>
      <Parallax translateX={[-100, 100]}>
        <Flex sx={{ flexDirection: "row" }}>
          <Service />

          <Service />
        </Flex>
      </Parallax>
*/
