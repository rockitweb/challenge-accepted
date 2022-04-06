/** @jsx jsx */
import { Box, Container, jsx } from "theme-ui";
import React from "react";
import Layout from "../components/layouts/layout";
import HomeHero from "../components/heros/home-hero";
import MeetMe from "../components/sections/meet-me";
import { ParallaxProvider } from "react-scroll-parallax";
import Services from "../components/services/services";

export type IndexPageProps = {};
export const IndexPage: React.FC<IndexPageProps> = ({}) => {
  return (
    <Layout>

        <HomeHero />
     
    </Layout>
  );
};

export default IndexPage;
