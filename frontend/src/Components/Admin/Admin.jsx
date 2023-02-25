import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import ProfileIcon from "../../Profile/ProfileIcon";
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const Admin = () => {
  const [hamMenu, setHamMenu] = useState(false);
  console.log(hamMenu);
  return (
    <>
      <Box display={"grid"}>
        <Box
          w={[
            hamMenu ? "100vw" : "20vw",
            hamMenu ? "100vw" : "20vw",
            hamMenu ? "100vw" : "20vw",
            "20vw",
            "20vw",
          ]}
          h={"100vh"}
          pos={"fixed"}
          top={"0px"}
          left={[
            hamMenu ? "0" : "-300px",
            hamMenu ? "0" : "-300px",
            hamMenu ? "0" : "-300px",
            "0",
            "0",
          ]}
          zIndex={2}
        >
          <Sidebar hamController={hamMenu} hamClick={setHamMenu} />
        </Box>
        <Box
          display={["block", "block", "block", "none", "none"]}
          border={"2px solid black"}
          backgroundColor={"rgb(236, 225, 246)"}
          zIndex={2}
          pos={"fixed"}
          top={"40px"}
          left={"50px"}
          padding={"4"}
          borderRadius={"1.2rem"}
          onClick={() => setHamMenu(!hamMenu)}
        >
          {!hamMenu ? <GiHamburgerMenu /> : <RxCross2 />}
        </Box>
        <Box
          border={"1px solid black"}
          backgroundColor={"rgb(236, 225, 246)"}
          zIndex={2}
          pos={"fixed"}
          top={"20px"}
          right={"50px"}
          padding={"2"}
          borderRadius={"1.2rem"}
        >
          <ProfileIcon />
        </Box>
        <Box
          pos={"absolute"}
          width={["100vw", "100vw", "100vw", "80vw", "80vw"]}
          right={"0"}
          // top={["100vh", "100vh", "100vh", "0", "0"]}

          height={"200vh"}
        >
          <Box mt={"7rem"}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
