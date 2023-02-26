import { Td, Tr, Button } from "@chakra-ui/react";
import React from "react";

const UserRow = ({ user }) => {
  return (
    <Tr>
      <Td>{user._id}</Td>
      <Td>{user.name}</Td>
      <Td>{user.email}</Td>
      <Td>{user.role}</Td>
      <Td>{user.createdAt.slice(0, 10)}</Td>
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

export default UserRow;
