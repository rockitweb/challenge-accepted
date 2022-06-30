/** @jsx jsx */
import { Box, Flex, jsx, Text } from "theme-ui";
import React from "react";
import Section2Col from "../layouts/section-2-col";
import ContactForm from "../contact-form";
import Fade from "react-reveal/Fade";
export type ContactProps = {};
export const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <Section2Col reverse={false} makeSticky={false}>
      <Flex
        //py={[5]}
        sx={{
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Text mt={[]} variant="heading.white" sx={{ letterSpacing: ".5em" }}>
          contact
        </Text>
      </Flex>
      <Box bg="grey" p={[6]}>
        <Fade>
          <ContactForm />
        </Fade>
      </Box>
    </Section2Col>
  );
};

export default Contact;
