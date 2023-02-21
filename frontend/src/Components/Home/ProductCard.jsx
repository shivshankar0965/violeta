import { Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({name,price,image}) => {
  return (
    <Stack>
      <Image src={image} />
      <Text display={name ? "block" : "none"}>{name}</Text>
      <Text display={price ? "block" : "none"}>₹{price}</Text>
    </Stack>
  );
}

export default ProductCard