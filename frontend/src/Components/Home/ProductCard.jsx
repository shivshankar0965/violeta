import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ name, price, image, discount }) => {
  return (
    <Stack>
      <Image
        // h={["110px", null, "220px"]}
        // w={["110px", null, "220px"]}
        src={image}
      />
      <Text display={name ? "block" : "none"}>{name}</Text>

      <Text display={price ? "block" : "none"}>{price}</Text>
      <Text
        display={price ? "block" : "none"}
        mt="5px"
        color="#f07bbb"
        fontSize="xs"
      >
        {`${discount}`}% off
      </Text>
    </Stack>
  );
};

export default ProductCard;
