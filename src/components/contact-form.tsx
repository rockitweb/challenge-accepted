/** @jsx jsx */
import { Box, Button, Input, jsx, Label, Textarea } from "theme-ui";
import React from "react";

export type ContactProps = {};
export const ContactForm: React.FC<ContactProps> = ({}) => {
  return (
    <form name="Contact Form" method="POST" data-netlify="true">
      <Input type="hidden" name="form-name" value="Contact Form" />
      <Box>
        <Label>Your Email:</Label>
        <Input type="email" name="email" />
      </Box>
      <Box>
        <Label>Message:</Label>
        <Textarea name="message" />
      </Box>
      <Button type="submit">Send</Button>
    </form>
  );
};

export default ContactForm;
