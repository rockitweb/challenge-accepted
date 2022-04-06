/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import React from "react";

export type ServiceProps = {};
export const Service: React.FC<ServiceProps> = ({}) => {
  return (
    <Flex
      m={3}
      sx={{
        width: "500px",
        height: "400px",
        border: "white 1px solid",
        borderRadius: 8,
      }}
    ></Flex>
  );
};

export default Service;
