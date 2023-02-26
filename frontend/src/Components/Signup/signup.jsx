import React, { useReducer, useState } from "react";
// import data from "../../db.json"
import { useDispatch } from "react-redux";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { register } from "../../redux/AuthReducer/action";
import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../../redux/AuthReducer/actionTypes";
function reducer(state, action) {
  // console.log(action)
  // console.log(state)
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "password":
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  name: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setter] = useReducer(reducer, initialState);

  const dispatch = useDispatch();

  const toast = useToast();
  const signupHandler = () => {
    dispatch(register(state)).then((r) => {
      if (r === REGISTER_SUCCESS) {
        toast({
          title: "Account created.",
          description: "Your account has been successfully created",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        // navigate("/sign-in", { replace: true });
      } else if (r === REGISTER_FAILURE) {
        toast({
          description: "Please enter credentials",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };

  //  console.log(data)

  return (
    <Box mt="6rem">
      <Divider orientation="horizontal" />
      <Box maxW="1150px" mx="auto" px="2" py="10">
        <Box
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: 4, md: 10 }}
        >
          <Breadcrumb fontWeight="light" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/sign-up">Sign-Up</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box px={["2", "0"]}>
          <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
            Sign Up
          </Heading>
        </Box>
        <Divider orientation="horizontal" />
        <Box mx="auto" maxW="md" py="6">
          <Stack spacing={4}>
            <Box background="none" color="none">
              <FormControl isRequired>
                <FormLabel fontWeight="hairline">Full name</FormLabel>
                <Input
                  focusBorderColor="#353535"
                  errorBorderColor="red.300"
                  type="text"
                  size="lg"
                  value={state.name}
                  onChange={(e) =>
                    setter({ type: "name", payload: e.target.value })
                  }
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel fontWeight="hairline">Email address</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="email"
                  value={state.email}
                  onChange={(e) =>
                    setter({ type: "email", payload: e.target.value })
                  }
                  size="lg"
                />
              </FormControl>
            </Box>

            <Box>
              <FormControl isRequired>
                <FormLabel fontWeight="hairline">Password</FormLabel>
                <InputGroup>
                  <Input
                    size="lg"
                    focusBorderColor="black"
                    errorBorderColor="red.300"
                    type={showPassword ? "text" : "password"}
                    value={state.password}
                    onChange={(e) =>
                      setter({ type: "password", payload: e.target.value })
                    }
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Box>
          </Stack>
          <Box mt="6" textAlign="center">
            Already a user?{" "}
            <Link color="teal.500" href="sign-in">
              Login
            </Link>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              alignItems="center"
              justifyContent="center"
              width="100%"
              maxWidth="180px"
              // colorScheme="#E40980"
              background="#E40980"
              onClick={signupHandler}
              padding="12px"
              mt="20px"
              color="#fff"
              fontSize="1.2rem"
              _hover={{
                background: "teal.500",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
