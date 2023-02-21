import { Box, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const ImageGrid = ({dataArray}) => {
  return (
    <Box mt='50px'>
        <SimpleGrid columns={2}>
            {dataArray.map((item)=><Image src={item.img} />)}
        </SimpleGrid>
    </Box>
  )
}

export default ImageGrid