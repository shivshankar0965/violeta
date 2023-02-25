import React from "react";
import { Tr, Td, Button } from "@chakra-ui/react";
const ProductRow = ({ product }) => {
  return (
    <Tr>
      <Td>{product._id}</Td>
      <Td>{product.images[0].url}</Td>
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
