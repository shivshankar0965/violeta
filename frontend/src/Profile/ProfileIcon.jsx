import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
const ProfileIcon = () => {
  return (
    <>
      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          display={["none", "none", "flex", "flex", "flex"]}
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={"https://avatars.githubusercontent.com/u/65837544?v=4"}
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Shiv Shankar</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Your Profile</MenuItem>
              <MenuItem>Your Orders</MenuItem>
              <MenuItem>Reset Password</MenuItem>
              <MenuItem>Forgot Password</MenuItem>
              <MenuDivider />
              <MenuItem display={"flex"} alignItems={"center"}>
                <HiOutlineLogout style={{ marginRight: "1.1rem" }} />
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </>
  );
};

export default ProfileIcon;
