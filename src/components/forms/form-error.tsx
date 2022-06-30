/** @jsx jsx */
import { Box, jsx, Paragraph } from "theme-ui";
import React from "react";
import Fade from "react-reveal/Fade";

export type FormErrorProps = { fieldError: any | undefined };
export const FormError: React.FC<FormErrorProps> = ({ fieldError }) => {
  return (
    <Fade bottom  when={fieldError || false}>
      <Box sx={{ variant: "forms.validationError" }}>{fieldError?.message}</Box>
    </Fade>
  );
};

export default FormError;
