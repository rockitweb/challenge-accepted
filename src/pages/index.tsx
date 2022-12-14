/** @jsx jsx */
import { Box, Container, Flex, jsx } from "theme-ui";
import React from "react";
import Layout from "../components/layouts/layout";
import HomeHero from "../components/heros/home-hero";
import MeetMe from "../components/sections/meet-me";
import { ParallaxProvider } from "react-scroll-parallax";
import Services from "../components/services/services";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";

export type IndexPageProps = {};
export const IndexPage: React.FC<IndexPageProps> = ({}) => {
  return (
    <Layout>
      <HomeHero />
      <MeetMe />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
