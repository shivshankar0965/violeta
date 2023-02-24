import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsArrowDownUp, BsCheck2All } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BiCommentAdd } from "react-icons/bi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import "./sidebar.css";
const Sidebar = ({ hamController, hamClick }) => {
  const navigate = useNavigate();
  const sideBarLinks = [
    {
      icon: <MdOutlineDashboardCustomize />,
      label: "dashboard",
      func: handleDash,
    },
    {
      icon: <BsArrowDownUp />,
      label: "products",
      func: handleDash,
      menu: [
        {
          icon: <BsCheck2All />,
          label: "All",
          func: handleCreateProduct,
        },
        {
          icon: <AiOutlinePlus />,
          label: "Add New",
          func: handleCreateProduct,
        },
      ],
    },
    {
      icon: <FaHandHoldingUsd />,
      label: "Orders",
      func: handleDash,
    },
    {
      icon: <FiUsers />,
      label: "Users",
      func: handleDash,
    },
    {
      icon: <BiCommentAdd />,
      label: "Reviews",
      func: handleDash,
    },
  ];
  function handleDash() {}
  function handleCreateProduct() {}
  return (
    <>
      <Flex
        borderRight={"1px solid lightgray"}
        flexDirection={"column"}
        className="sidebar"
        height={"100%"}
        width={"100%"}
      >
        <Box
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => navigate("/")}
        >
          <Image
            width={["65%", "45%", "25%", "65%", "75%"]}
            src="/violeta.png"
          />
        </Box>
        <Box className="sidebar_header">
          <Heading
            textAlign={"center"}
            size={["sm", "sm", "md", "md", "lg"]}
            fontFamily={"monospace"}
          >
            Admin Dashboard
          </Heading>
          <div className="border_bottom"></div>
        </Box>
        <Box className="sidebar_links">
          {sideBarLinks &&
            sideBarLinks.map((navlink, i) =>
              navlink.menu ? (
                <Menu>
                  <MenuButton width={"100%"}>
                    <Flex
                      pos="relative"
                      className="sidebar_link"
                      alignItems={"center"}
                      width={"100%"}
                    >
                      <Box
                        padding={"2.5"}
                        borderRadius={"md"}
                        backgroundColor={"pink.300"}
                        mr={"4"}
                      >
                        {navlink.icon}
                      </Box>
                      <Box textTransform={"capitalize"}>{navlink.label}</Box>
                      <Box ml={"3"}>
                        <ChevronDownIcon fontSize={"24px"} />
                      </Box>
                    </Flex>
                  </MenuButton>
                  <MenuList
                  // zIndex={1}
                  // pos={"absolute"}
                  // bottom={"-60px"}
                  // left={["-200px", "-190px", "-220px", "-230px"]}
                  >
                    {navlink.menu &&
                      navlink.menu.map((submenu) => (
                        <MenuItem key={submenu}>
                          <Box mr={"4"}>{submenu.icon}</Box>
                          <Box>{submenu.label}</Box>
                        </MenuItem>
                      ))}
                  </MenuList>
                </Menu>
              ) : (
                <Flex className="sidebar_link" alignItems={"center"}>
                  <Box
                    padding={"2.5"}
                    borderRadius={"md"}
                    backgroundColor={"pink.300"}
                    mr={"4"}
                  >
                    {navlink.icon}
                  </Box>
                  <Box textTransform={"capitalize"}>{navlink.label}</Box>
                </Flex>
              )
            )}
        </Box>
      </Flex>
    </>
  );
};

export default Sidebar;
