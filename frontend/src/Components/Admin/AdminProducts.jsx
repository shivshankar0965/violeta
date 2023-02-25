import { Box, Flex, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import Headings from "./Headings";
import BreadCrumbUtils from "../../utils/BreadCrumb";
import Chart from "react-google-charts";

const AdminProducts = () => {
  const links = [
    {
      title: "dashboard",
      link: "/admin/dashboard",
    },
    {
      title: "products",
      link: "/admin/products",
    },
  ];
  return (
    <>
      <Box ml={"8"}>
        <Box maxW={"md"}>
          <BreadCrumbUtils data={links} />
        </Box>
        <Headings title={"Products"} />

        <Box
          flexDirection={"column"}
          display={"flex"}
          gap={"10"}
          color={"white"}
          w={"100%"}
        >
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Category</Th>
                <Th>Stock</Th>
                <Th>Created At</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {topProducts?.map((product, i) => (
        <ProductRow key={i} {...product} />
      ))} */}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
};

export default AdminProducts;
