import { Box, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Headings from "./Headings";
import BreadCrumbUtils from "../../utils/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/admin/admin.actions";
import ProductRow from "./ProductRow";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.adminReducers);
  console.log(data);
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
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
          // color={"white"}
          w={"100%"}
        >
          <Table>
            <Thead>
              <Tr>
                <Th textAlign="center">ID</Th>
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
              {data &&
                data.map((product) => (
                  <ProductRow key={product._id} product={product} />
                ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
};

export default AdminProducts;
