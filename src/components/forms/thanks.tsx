/** @jsx jsx */
import { Flex, Text, jsx } from "theme-ui";
import React from "react";

export type ThanksFormSubmissionProps = {};
export const ThanksFormSubmission: React.FC<
  ThanksFormSubmissionProps
> = ({}) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text color="primary" sx={{ fontSize: [5], textTransform: "uppercase" }}>
        Thankyou
      </Text>
      <Text>Thanks for your message! I'll be in touch as soon as possible</Text>
    </Flex>
  );
};

export default ThanksFormSubmission;
