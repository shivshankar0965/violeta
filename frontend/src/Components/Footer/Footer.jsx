import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AiFillTwitterCircle,
  AiFillGooglePlusCircle,
  AiTwotoneMail,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebook} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <SimpleGrid
        mt="30px"
        columns={[2, 2, 4]}
        p={["20px", "20px", "20px"]}
        pb={["50px", "50px", "50px"]}
        pr={["150px", "150px", "150px"]}
      >
        <VStack>
          <Box>
            <Heading
              textAlign="left"
              as="h5"
              size="15px"
              color="gray"
              mb="10px"
            >
              PURPLLE
            </Heading>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              About Us
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Our Team
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Careers
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Press
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Sitemap
            </Text>
          </Box>
        </VStack>
        <VStack>
          <Box>
            <Heading
              textAlign="left"
              as="h5"
              size="15px"
              color="gray"
              mb="10px"
            >
              PURPLLE BUSINESS
            </Heading>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Sell on Purplle
            </Text>
          </Box>
        </VStack>
        <VStack>
          <Box>
            <Heading
              textAlign="left"
              as="h5"
              size="15px"
              color="gray"
              mb="10px"
            >
              POLICY INFO
            </Heading>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Privacy Policy
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Terms of Use
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Return & Cancellation Policy
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Press
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Sitemap
            </Text>
          </Box>
        </VStack>
        <VStack>
          <Box>
            <Heading
              textAlign="left"
              as="h5"
              size="15px"
              color="gray"
              mb="10px"
            >
              PURPlLE
            </Heading>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Need Help?
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              FAQ's
            </Text>
            <Text
              textAlign="left"
              fontSize="14px"
              color="#6C7A82"
              cursor="pointer"
              mb="5px"
            >
              Contact Us
            </Text>
          </Box>
        </VStack>
      </SimpleGrid>
      <Box border="1px" borderColor="#e8e8e8" w="85%" m="auto"></Box>
      <SimpleGrid columns={[1, 1, 2]}>
        <SimpleGrid
          columns={4}
          pl={[null, null, "120px"]}
          pr={[null, null, "120px"]}
          spacing="150px"
        >
          <Box w="200px">
            <Heading as="h5" size="15px" color="gray" pt="40px" pl="30px">
              PAYMENT
            </Heading>
          </Box>
          <Box pl="-20px" w="300px" mt="25px">
            <Image
              mt="15px"
              src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1499177379_tt.jpg"
              w="300px"
              h="27px"
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          columns={4}
          pl={[null, null, "120px"]}
          pr={[null, null, "120px"]}
          spacing="150px"
        >
          <Box w="200px">
            <Heading as="h5" size="15px" color="gray" pt="40px" pl="30px">
              CONNECT
            </Heading>
          </Box>
          <Flex pt="40px" pl="30px" >
            
            <Box borderRadius={"50px"}>
              <FaFacebook size={"30px"}  color="#39579a" className="icons" />
            </Box>
            <Box>
              <AiFillTwitterCircle size={"30px"} color="#00abf0" className="icons" />
            </Box>
            <Box>
              <AiFillGooglePlusCircle size={"30px"} color="#ed3833" className="icons" />
            </Box>
            <Box>
              <AiTwotoneMail size={"30px"} color="#555555" className="icons" />
            </Box>
            <Box>
              <AiFillYoutube size={"30px"} color="#ed3833" className="icons" />
            </Box>
            <Box>
              <AiFillInstagram size={"30px"} color="#e91b90" className="icons" />
            </Box>
            <Box>
              <AiFillLinkedin size={"30px"} color="#397db3" className="icons" />
            </Box>
          </Flex>
              </SimpleGrid>
              <Center py={5} px={5} ml>Copyright @ 2020 Purplle All Rights Reserved.</Center>
          </SimpleGrid>
          
    </>
  );
};

export default Footer;
