/** @jsx jsx */
import { Box, Flex, Grid, jsx, Text } from "theme-ui";
import React from "react";
import Section2Col from "../layouts/section-2-col";
import ContactForm from "../contact-form";
import Fade from "react-reveal/Fade";
import { Icon } from "@iconify/react";
export type ContactProps = {};
export const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <Section2Col id="contact" reverse={false} makeSticky={false}>
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
        <Grid columns={3}>
          <a href="https://www.linkedin.com/in/simonturk" target={"_blank"}>
            <Icon
              icon="ant-design:linkedin-outlined"
              color="white"
              height="24"
            />
          </a>
          <a href="mailto:st@simonturk.com.au">
            <Icon icon="ant-design:mail-outlined" color="white" height="24" />
          </a>
          <a href="tel:0418308859">
            <Icon icon="ant-design:phone-outlined" color="white" height="24" />
          </a>
        </Grid>
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
