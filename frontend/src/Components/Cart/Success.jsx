import { Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <Stack>
      <Text as="b">Your Order has been placed.</Text>
      <Button bgColor="#e40980" color="white">
        <Link to="/">Continue Shopping</Link>
      </Button>
    </Stack>
  );
}

export default Success