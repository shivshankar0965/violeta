import { Box, Button, Center, Flex, Image, Input, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '../Home/useMediaQuery'
import PaymentModal from './PaymentModal'
import ProductCard from './ProductCard'

const CartComponents = () => {
  const [data,setData]=useState(JSON.parse(localStorage.getItem('cart')))
  const [total,setTotal]=useState(0)
  const [coupon,setCoupon]=useState(false)
    const isMd=useMediaQuery(960)

    useEffect(()=>{
      let sum=0
      data.forEach((el)=>{
        sum+=el.price
      })
      setTotal(sum)
    },[])
  return (
    <Center mt="100px" p="20px">
      <Stack direction={isMd ? "column" : "row"} gap="20px">
        <Stack gap="20px">
          <Flex
            justifyContent="space-between"
            bgColor="#fbeef6"
            p="20px"
            borderRadius="7px"
            border="1px solid pink"
          >
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
            <Button
              onClick={() => setCoupon(true)}
              bgColor="#e40980"
              color="white"
            >
              Apply
            </Button>
          </Flex>
          <hr />

          <Text as="b">Price</Text>
          <Flex gap="40px">
            <Stack>
              <Text as="b">Total</Text>
              <Text as="b">Shipping Charges</Text>
            </Stack>
            <Stack>
              <Text as="b">₹{total}</Text>
              <Text as="b">₹50</Text>
            </Stack>
          </Flex>
          <hr />
          <Flex gap="40px">
            <Stack>
              <Text as="b">Order Total</Text>
              <Text as="b" display={coupon ? "block" : "none"}>
                You Save
              </Text>
              <Text as="b" display={coupon ? "block" : "none"}>
                Grand Total
              </Text>
            </Stack>
            <Stack>
              <Text as="b">₹{total + 50}</Text>
              <Text as="b" display={coupon ? "block" : "none"}>
                ₹100
              </Text>
              <Text as="b" display={coupon ? "block" : "none"}>
                ₹{total + 50 - 100}
              </Text>
            </Stack>
          </Flex>
          <PaymentModal />
        </Stack>
      </Stack>
    </Center>
  );
}

export default CartComponents