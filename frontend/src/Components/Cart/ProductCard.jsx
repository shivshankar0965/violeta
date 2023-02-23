import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './ProductCard.css'

const ProductCard = ({image,name,price}) => {
  return (
    <Box className='product' p='10px'>
        <Flex gap='20px'>
            <Box>
                <Image h='75px' src={image} />
            </Box>
            <Stack>
                <Text>{name}</Text>
                <Text>Qty:</Text>
                <hr />
                <Button w='80px'>Remove</Button>
            </Stack>
            <Box>
                <Text>{price}</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default ProductCard