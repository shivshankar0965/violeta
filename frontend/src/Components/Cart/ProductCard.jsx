import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./ProductCard.css";

const ProductCard = ({ image, name, price }) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [qty, setQty] = useState(1);
  const handleRemove = (name) => {
    let filteredData = data.filter((el) => {
      if (el.name != name) {
        return el;
      }
    });
    setData(filteredData);
    localStorage.setItem("cart", JSON.stringify(filteredData));
  };
  return (
    <Box className="product" p="10px">
      <Flex gap="20px">
        <Box>
          <Image h="75px" src={image} />
        </Box>
        <Stack>
          <Text>{name}</Text>
          <Text>
            Qty:
            <select value={qty} onChange={(e)=>{
                setQty(+(e.target.value))
                }}>
              <option value='1'>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </Text>
          <hr />
          <Button onClick={() => handleRemove(name)} w="80px">
            Remove
          </Button>
        </Stack>
        <Box>
          <Text>₹{price}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductCard;
