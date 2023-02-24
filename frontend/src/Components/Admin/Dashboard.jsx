import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BreadCrumbUtils from "../../utils/BreadCrumb";
import { Line } from "react-chartjs-2";
const Dashboard = () => {
  const links = [
    {
      title: "dashboard",
      link: "/admin/dashboard",
    },
  ];
  const pou = [
    {
      title: "Products",
      quantity: 9,
      bg: "#d15c5e",
    },
    {
      title: "Orders",
      quantity: 2,
      bg: "#c27951",
    },
    {
      title: "Users",
      quantity: 5,
      bg: "#5197c2",
    },
  ];
  const data = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: "red",

        data: [0, 200],
      },
    ],
  };
  return (
    <>
      <Box ml={"4"}>
        <Box maxW={"md"}>
          <BreadCrumbUtils data={links} />
        </Box>
        <Box mt={4} maxW={"95%"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDir="column"
            color={"white"}
            backgroundColor={"#cf67ad"}
            fontSize={"md"}
            p={"2"}
            fontWeight={"medium"}
          >
            <Text>Total Amont</Text>
            <Text>{`₹${200}`}</Text>
          </Box>
        </Box>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={"6"}
          flexWrap={"wrap"}
          mt={"4"}
        >
          {pou.map((el, i) => (
            <Flex
              backgroundColor={el.bg}
              shadow={"md"}
              w="150px"
              h={"150px"}
              borderRadius={"50%"}
              key={i}
              justifyContent="center"
              alignItems="center"
              color="white"
              flexDir={"column"}
            >
              <Text fontWeight="bold" fontSize={"xl"}>
                {el.title}
              </Text>
              <Text fontWeight="bold" fontSize={"xl"}>
                {el.quantity}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Box>{/* <Line data={data} /> */}</Box>
      </Box>
    </>
  );
};

export default Dashboard;
