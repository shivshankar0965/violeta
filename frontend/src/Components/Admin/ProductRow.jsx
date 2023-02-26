import React from "react";
import { Tr, Td, Button, Box, Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
const ProductRow = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddtoCart = (user) => {
    dispatch(addToCart(user));
  };
  return (
    <Tr onClick={() => handleAddtoCart(product)}>
      <Td>{product._id}</Td>
      <Td>
        <Box maxW={"100px"}>
          <Image src={product.images[0].url} />
        </Box>
      </Td>
      <Td>{product.name}</Td>
      <Td>{`₹${product.price}`}</Td>
      <Td>{product.category}</Td>
      <Td>{product.stock}</Td>
      <Td>{product.createdAt.slice(0, 10)}</Td>
      <Td>
        <Button mr={4} variant={"outline"} size={"sm"}>
          Edit
        </Button>
        <Button variant={"outline"} size={"sm"}>
          Delete
        </Button>
      </Td>
    </Tr>
  );
};

export default ProductRow;
