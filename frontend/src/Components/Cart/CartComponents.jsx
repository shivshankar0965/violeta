import { Box, Button, Center, Flex, Image, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '../Home/useMediaQuery'
import ProductCard from './ProductCard'

const CartComponents = ({data}) => {
    const isMd=useMediaQuery(960)
  return (
    <Center mt="100px" p="20px">
      <Stack direction={isMd ? "column" : "row"} gap="20px">
        <Stack gap="20px">
          <Flex justifyContent='space-between' bgColor="#fbeef6" p='20px' borderRadius='7px' border='1px solid pink'>
            <Image src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1643285769_offer-icon.png" />
            <Text>Offers Available(1)</Text>
            <Link>View All</Link>
          </Flex>
          <hr />
          <Text fontSize="xl">My Cart ({data.length})</Text>
          {data.map((item) => (
            <ProductCard
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </Stack>
        <Stack gap="10px">
          <Flex gap="10px" p="10px" border="1px solid #bfc6c9">
            <Image
              h="50px"
              src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1515664301_shield.png"
            />
            <Stack>
              <Text>100% Safe Payments</Text>
              <Text>Genuine Products | Easy Returns</Text>
            </Stack>
          </Flex>
          <Flex gap="10px">
            <Input placeholder="Coupon Code" />
            <Button bgColor="#e40980" color="white">
              Apply
            </Button>
          </Flex>
          <hr />

          <Text>Price</Text>
          <Flex gap="40px">
            <Stack>
              <Text>Total</Text>
              <Text>Shipping Charges</Text>
              <Text>Coupon Discount</Text>
            </Stack>
            <Stack>
              <Text>Total</Text>
              <Text>0</Text>
              <Text>100</Text>
            </Stack>
          </Flex>
          <hr />
          <Flex gap="40px">
            <Stack>
              <Text>Order Total</Text>
              <Text>You Save</Text>
            </Stack>
            <Stack>
              <Text>total</Text>
              <Text>100</Text>
            </Stack>
          </Flex>
          <Button bgColor="#e40980" color="white">
            Place Order
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}

export default CartComponents