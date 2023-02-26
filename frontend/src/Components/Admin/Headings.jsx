import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Headings = ({ title }) => {
  return (
    <Box
      borderTop={"1px solid #d9cad4"}
      borderBottom={"1px solid #d9cad4"}
      padding={"1rem 0"}
      width="95%"
      mt="6"
    >
      <Heading color={"gray.600"} size={"md"}>
        {title}
      </Heading>
    </Box>
  );
};

export default Headings;
