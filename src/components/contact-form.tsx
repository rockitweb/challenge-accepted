/** @jsx jsx */
import { Box, Button, Flex, Input, jsx, Label, Textarea } from "theme-ui";
import React from "react";
import { useNetlify } from "../hooks/use-netlifyForms";
import Asterisk from "./design-elements/asterisk";
import FormError from "./forms/form-error";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactProps = {};
export const ContactForm: React.FC<ContactProps> = ({}) => {
  const [
    {
      register,
      control,
      formState: { errors, isDirty, isValid },
    },
    handleOnSubmit,
    serverState,
  ] = useNetlify<ContactFormData>(undefined, undefined, [
    "name",
    "email",
    "message",
  ]);

  return (
    <form
      name="Contact Form"
      method="POST"
      data-netlify={true}
      data-netlify-honeypot={true}
      onSubmit={handleOnSubmit}
    >
      <Input type="hidden" name="form-name" value="Contact Form" />
      <Input type="hidden" name="bot-field"></Input>
      <Flex pb={2} sx={{ flexDirection: "column" }}>
        <Flex>
          <Label>Your Name</Label> <Asterisk />
        </Flex>
        <Input
          id="name"
          {...register<"name">("name", {
            required: { value: true, message: "Name is required" },
            minLength: { value: 2, message: "Name is too short" },
          })}
        />
        <FormError fieldError={errors.name} />
      </Flex>
      <Flex pb={2} sx={{ flexDirection: "column" }}>
        <Flex>
          <Label>Your Email</Label> <Asterisk />
        </Flex>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email",
            },
          })}
        />
        <FormError fieldError={errors.email} />
      </Flex>
      <Flex pb={2} sx={{ flexDirection: "column" }}>
        <Flex>
          <Label>Message</Label> <Asterisk />
        </Flex>
        <Textarea
          id="message"
          {...register("message", {
            required: { value: true, message: "Message is required" },
            minLength: { value: 2, message: "Message is too short" },
          })}
        />
        <FormError fieldError={errors.message} />
      </Flex>
      <Button
        type="submit"
        variant={!isDirty || !isValid ? "disabled" : "primary"}
        disabled={!isDirty || !isValid}
      >
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
