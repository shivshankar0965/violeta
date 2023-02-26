import { Box, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import BreadCrumbUtils from "../../utils/BreadCrumb";
import Headings from "./Headings";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/admin/admin.actions";

import UserRow from "./UserRow";
const Users = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.adminReducers);
  const links = [
    {
      title: "dashboard",
      link: "/admin/dashboard",
    },
    {
      title: "users",
      link: "/admin/users",
    },
  ];

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <Box ml={"8"}>
        <Box maxW={"md"}>
          <BreadCrumbUtils data={links} />
        </Box>
        <Headings title={"Users Database"} />

        <Box
          flexDirection={"column"}
          display={"flex"}
          gap={"10"}
          // color={"white"}
          w={"100%"}
        >
          <Table>
            <Thead>
              <Tr>
                <Th textAlign="center">ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Created At</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.map((user) => <UserRow key={user._id} user={user} />)}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
};

export default Users;
