import React from "react";
import OfferNavbar from "./OfferNavbar";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
  useToast,
  Link,
  DrawerFooter,
  Container,
} from "@chakra-ui/react";
import "./Navbar.css";
import { CiFaceSmile } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { BsMinecartLoaded } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { HiMenu } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import logo from "../../Assets/violeta1.png";

const isAuth = false;
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  return (
    <div>
      <OfferNavbar />(
      <div>
        <Box
          position={"fixed"}
          top="50px"
          zIndex={100}
          bgColor="white"
          w="100%"
        >
          <Box id="after-top">
            

            {/* <div id="search-bar">
              <InputGroup>
                <Input placeholder="Search for a Product or a Brand" />
                <InputRightElement />
              </InputGroup>
            </div> */}
            <Button
              colorScheme="white"
              bg={"white"}
              color="black"
              onClick={onOpen}
              borderBottom="2px solid blue"
            >
              <Text>What are you looking for?</Text>
              <Text pl="45px" fontSize={"25px"}>
                <CiSearch />
              </Text>
            </Button>
            <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader mt="15px" fontWeight={"light"} m="auto" w="80%">
                  Search for Product and Brands{" "}
                </DrawerHeader>
                <DrawerBody m="auto" mt="5px" w="80%">
                  <Flex cursor={"pointer"}>
                    <Input
                      // variant="outline"
                      variant="flushed"
                      borderRadius={"1px"}
                      borderBottomColor={"#fd1d92"}
                      focusBorderColor="#fd1d92"
                      placeholder="Type here..."
                      // onChange={(e) => setQuery(e.target.value)}
                    />
                    <Text
                      ml="-10px"
                      fontSize={"30px"}
                      color="#fd1d92"
                      bg="white"
                      // onClick={handleSearch}
                    >
                      <CiSearch />
                    </Text>
                  </Flex>
                </DrawerBody>

                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Box>
              <Link to="/">
                <Image
                  className="logo"
                  // src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </Box>

            {/* old   */}
            <div style={{ display: "flex", gap: "50px" }}>
            <div   style={{
                      display: "flex",
                      alignItems: "center",
                      // gap: "10px",
                    }}><BsHeart size="2em"/></div>
              <div id="dropdown-account">
                <div>
                  <Link
                    to="/login"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      // gap: "10px",
                    }}
                  >
                    <CiFaceSmile  size="2.6em" />
                    <Text>{isAuth ? "username" : <BiMenuAltRight/>}</Text>
                  </Link>
                </div>
                <div id="dropdown-account-content">
                  {isAuth ? (
                    <Button
                      colorScheme="none"
                      w="full"
                      bgColor="black"
                      borderRadius={0}
                    >
                      LOGOUT
                    </Button>
                  ) : (
                    <Link to="/login">
                      <Button
                        colorScheme="none"
                        w="full"
                        bgColor="black"
                        borderRadius={0}
                      >
                        LOGIN
                      </Button>
                    </Link>
                  )}
                  <Link to="/signup">
                    <Button
                      colorScheme="none"
                      mt={4}
                      borderRadius={0}
                      color="black"
                      w="full"
                      variant="outline"
                    >
                      REGISTER
                    </Button>
                  </Link>

                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                      marginTop: "20px",
                      fontSize: "16px",
                    }}
                  >
                    <p>Wishlist</p>
                    <p>Your Orders</p>
                    <p>Your Referrels</p>
                  </div>
                </div>
              </div>

              <div class="dropdown">
                <Link to="/cart">
                  <div
                     style={{
                      display: "flex",
                      alignItems: "center",
                      // gap: "10px",
                    }}
                  >
                    <div id="cart-icon">
                      <BsMinecartLoaded  size="2em" />
                      <p className="cartValue">{"cartItems.length"}</p>
                    </div>

                    {/* <Text>Cart</Text> */}
                  </div>
                </Link>
                <div class="dropdown-content">
                  <p>{`There are currently ${"cartItems.length"} items in your cart.`}</p>
                </div>
              </div>
            </div>
          </Box>

          <Box
            id="menu_nav"
            style={{ borderTop: "1px solid gainsboro" }}
            borderBottom="1px solid gainsboro"
          >
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-evenly"
              width="84%"
              margin="auto"
              id="hover-black"
            >
              <div id="menu-dropdown" >
              
                <Link to="/holiday" >
                  <div id="menu-title" ><span><BiMenuAltRight/></span><span>Makeup</span></div>
                </Link>
                <div className="menu-dropdown-content">
                  <Box display="flex" gap="50px" pt={5} padding="20px">
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        Face Makeup
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Primer</p>
                        </Link>
                        <Link to="">
                          <p>Concealer</p>
                        </Link>
                        <Link to="">
                          <p>BB & CC Cream</p>
                        </Link>
                        <Link to="">
                          <p>Foundation</p>
                        </Link>
                        <Link to="">
                          <p>Compact</p>
                        </Link>
                        <Link to="">
                          <p>Loose Powder</p>
                        </Link>
                        <Link to="">
                          <p>Blush</p>
                        </Link>
                        <Link to="">
                          <p>Highlighters & Illuminators</p>
                        </Link>
                        <Link to="">
                          <p>Bronzer</p>
                        </Link>
                        <Link to="">
                          <p>Contour</p>
                        </Link>
                        <Link to="">
                          <p>Setting Sprays & Fixers</p>
                        </Link>
                        <Link to="">
                          <p>Sindoor</p>
                        </Link>
                        <Link to="">
                          <p>Makeup Remover</p>
                        </Link>
                      </div>
                    </div>
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        Lip Makeup
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          {" "}
                          <p>Lipstick</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Liquid Lipstick</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Lip Crayon</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Luxury Holiday Gifts</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Lip Liner</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Lip Gloss</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Lip Stains & Tints</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Lip Balm & Treatments</p>
                        </Link>
                      </div>
                    </div>

                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        Brushes & Tools
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Face Brushes</p>
                        </Link>
                        <Link to="">
                          <p>Eye Brushes</p>
                        </Link>
                        <Link to="">
                          <p>Lip Brushes</p>
                        </Link>
                        <Link to="">
                          <p>Brush Sets</p>
                        </Link>
                        <Link to="">
                          <p>Sponges & Applicators</p>
                        </Link>
                        <Link to="">
                          <p>Tweezers</p>
                        </Link>
                        <Link to="">
                          <p>Eyelash Curlers</p>
                        </Link>
                        <Link to="">
                          <p>Mirror</p>
                        </Link>
                        <Link to="">
                          <p>Makeup Pouches</p>
                        </Link>
                        <Link to="">
                          <p>Makeup Brush Cleaner</p>
                        </Link>
                        <Link to="">
                          <p>Sharpener</p>
                        </Link>
                      </div>
                    </div>

                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        Eye Makeup
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Eyeliner</p>
                        </Link>
                        <Link to="">
                          <p>Under eye Concealers</p>
                        </Link>
                        <Link to="">
                          <p>Eyeshadow</p>
                        </Link>
                        <Link to="">
                          <p>Kajal</p>
                        </Link>
                        <Link to="">
                          <p>Mascara</p>
                        </Link>
                        <Link to="">
                          <p>False Eyelashes</p>
                        </Link>
                        <Link to="">
                          <p>Eyebrow Enahancer</p>
                        </Link>
                      </div>
                    </div>
                  </Box>
                </div>
              </div>

              <div id="menu-dropdown">
                <Link to="/skincare">
                  <div id="menu-title">Skin Care</div>
                </Link>
                <div className="menu-dropdown-content">
                  <Box display="flex" gap="50px" pt={5} padding="20px">
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        CLEANSERS
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Face Wash</p>
                        </Link>
                        <Link to="">
                          <p>Cleanser</p>
                        </Link>
                        <Link to="">
                          <p>Scrub & Exfoliators</p>
                        </Link>
                        <Link to="">
                          <p>Makeup Remover</p>
                        </Link>
                        <Link to="">
                          <p>Facial Wipes</p>
                        </Link>
                      </div>
                    </div>
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        MOISTURIZERS
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          {" "}
                          <p>Face Moisturizers</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Night Cream</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Serum & Essences</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Facial Oil</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>BB & CC Cream</p>
                        </Link>
                        
                      </div>
                    </div>

                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        EYE CARE
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Eye Masks & Patches</p>
                        </Link>
                        <Link to="">
                          <p>Eye Serum</p>
                        </Link>
                        <Link to="">
                          <p>Eye Cream</p>
                        </Link>
                        <Link to="">
                          <p>Eye Makeup Remover</p>
                        </Link>
                      </div>
                    </div>

                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        BODY CARE
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Body Lotions & Moisturizers</p>
                        </Link>
                        <Link to="">
                          <p>Body Cream & Body Butters</p>
                        </Link>
                        <Link to="">
                          <p>Talc</p>
                        </Link>
                        <Link to="">
                          <p>Body & Massage Oils</p>
                        </Link>
                        <Link to="">
                          <p>Body Wash & Shower Gel</p>
                        </Link>
                        <Link to="">
                          <p>Body Scrub &  Polish</p>
                        </Link>
                      </div>
                    </div>
                  </Box>
                </div>
              </div>

              <div id="menu-dropdown">
                <Link to="/hair">
                  <div id="menu-title">Hair Care</div>
                </Link>
                <div className="menu-dropdown-content">
                  <Box display="flex" gap="50px" pt={5} padding="20px">
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        SHAMPOO & CONDITIONERS
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Shampoo</p>
                        </Link>
                        <Link to="">
                          <p>Dry Shampoo</p>
                        </Link>
                        <Link to="">
                          <p>Conditioner</p>
                        </Link>
                        
                      </div>
                    </div>
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        NOURISHMENT
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          {" "}
                          <p>Hair Oil</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Hair Serum</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Hair Spa & Mask</p>
                        </Link>
                        
                      </div>
                    </div>

                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        HAIR STYLING & TOOLS
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Hair Color</p>
                        </Link>
                        <Link to="">
                          <p>Hair Spray</p>
                        </Link>
                        <Link to="">
                          <p>Styling Cream , Gel & Waxes</p>
                        </Link>
                        <Link to="">
                          <p>Hair Serum</p>
                        </Link>
                        <Link to="">
                          <p>Hair Brushes & Combs</p>
                        </Link>
                        <Link to="">
                          <p>Hair Dryer</p>
                        </Link>
                        <Link to="">
                          <p>Hair Straighteners</p>
                        </Link>
                        <Link to="">
                          <p>Hair Rollers & Curlers</p>
                        </Link>
                      </div>
                    </div>

                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        BY CONCERN
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Color Protection</p>
                        </Link>
                        <Link to="">
                          <p>Damaged hair</p>
                        </Link>
                        <Link to="">
                          <p>Dandruff</p>
                        </Link>
                        <Link to="">
                          <p>Dull & Dry</p>
                        </Link>
                        <Link to="">
                          <p>Spoit Ends</p>
                        </Link>
                        <Link to="">
                          <p>Volume</p>
                        </Link>
                        <Link to="">
                          <p>Grey Hair</p>
                        </Link>
                        <Link to="">
                          <p>Hair Thinning & Hairfall</p>
                        </Link>
                      </div>
                    </div>
                  </Box>
                </div>
              </div>

              <div id="menu-dropdown">
                <Link to="">
                  <div id="menu-title">Applicances</div>
                </Link>
                <div className="menu-dropdown-content">
                  <Box display="flex" gap="50px" pt={5} padding="20px">
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        STYLING TOOLS
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>HAir Dryer</p>
                        </Link>
                        <Link to="">
                          <p>Hair Curler</p>
                        </Link>
                        <Link to="">
                          <p>Hair Straightener</p>
                        </Link>
                        <Link to="">
                          <p>Hair Styler</p>
                        </Link>
                        <Link to="">
                          <p>Hair Crimpers</p>
                        </Link>
                        
                      </div>
                    </div>
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        HAIR REMOVAL TOOLS
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          {" "}
                          <p>Epilators</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Trimmers & Clippers</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Male Grooming</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Female Grooming</p>
                        </Link>
                        
                      </div>
                    </div>

                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        FACE & BODY TOOLS
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Massager</p>
                        </Link>
                        <Link to="">
                          <p>Face Appliances</p>
                        </Link>
                        <Link to="">
                          <p>Face Appliances</p>
                        </Link>
                      </div>
                    </div>

                  
                  </Box>
                </div>
                
              </div>
              <div id="menu-dropdown">
                <Link to="">
                  <div id="menu-title">Personal Care</div>
                </Link>
                <div className="menu-dropdown-content">
                  <Box display="flex" gap="50px" pt={5} padding="20px">
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        SAVING CARE
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Shaving Cream</p>
                        </Link>
                        <Link to="">
                          <p>Razzors & Catridges</p>
                        </Link>
                        <Link to="">
                          <p>AfterShaves</p>
                        </Link>
                        
                        
                      </div>
                    </div>
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        SKINCARE
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          {" "}
                          <p>Face Wash</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Scrubs & Exfoliators</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Face Cream</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Face Masks</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Moisturizers</p>
                        </Link>
                        <Link to="">
                          {" "}
                          <p>Gel</p>
                        </Link>
                        
                      </div>
                    </div>

                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        BATH & BODY
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Shower Gel</p>
                        </Link>
                        <Link to="">
                          <p>Soap</p>
                        </Link>
                        <Link to="">
                          <p>Talc</p>
                        </Link>
                      </div>
                    </div>
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        MENS'S GROOMING
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Shaving Cream</p>
                        </Link>
                        <Link to="">
                          <p>Razor & Catridges</p>
                        </Link>
                        <Link to="">
                          <p>Beard Care</p>
                        </Link>
                        <Link to="">
                          <p>Aftershave</p>
                        </Link>
                        <Link to="">
                          <p>Deodorants & Roll-Ons</p>
                        </Link>
                      </div>
                    </div>
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        FEMININE HYGIENE
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Sanitary Napkins</p>
                        </Link>
                        <Link to="">
                          <p>Tampoons</p>
                        </Link>
                        <Link to="">
                          <p>Pantyliners</p>
                        </Link>
                        <Link to="">
                          <p>Menstrual Cups</p>
                        </Link>
                        <Link to="">
                          <p>Intimate Care</p>
                        </Link>
                        <Link to="">
                          <p>Shaving Gel & Hair Removal</p>
                        </Link>
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
              <div id="menu-dropdown">
                <Link to="">
                  <div id="menu-title">Men</div>
                </Link>
                <div className="menu-dropdown-content">
                  <Box display="flex"  gap="50px" pt={5} padding="20px">
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        SAVING CARE
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Shaving Cream</p>
                        </Link>
                        <Link to="">
                          <p>Razzors & Catridges</p>
                        </Link>
                        <Link to="">
                          <p>AfterShaves</p>
                        </Link>
                        
                        
                      </div>
                    </div>
                  

                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        BATH & BODY
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Shower Gel</p>
                        </Link>
                        <Link to="">
                          <p>Soap</p>
                        </Link>
                        <Link to="">
                          <p>Talc</p>
                        </Link>
                      </div>
                    </div>
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        MENS'S GROOMING
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Shaving Cream</p>
                        </Link>
                        <Link to="">
                          <p>Razor & Catridges</p>
                        </Link>
                        <Link to="">
                          <p>Beard Care</p>
                        </Link>
                        <Link to="">
                          <p>Aftershave</p>
                        </Link>
                        <Link to="">
                          <p>Deodorants & Roll-Ons</p>
                        </Link>
                      </div>
                    </div>
                    <div
                      style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}
                    >
                      <p
                        style={{
                          paddingTop: "15px",
                          textAlign: "left",
                          borderTop: "1px solid gray",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        FEMININE HYGIENE
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link to="">
                          <p>Sanitary Napkins</p>
                        </Link>
                        <Link to="">
                          <p>Tampoons</p>
                        </Link>
                        <Link to="">
                          <p>Pantyliners</p>
                        </Link>
                        <Link to="">
                          <p>Menstrual Cups</p>
                        </Link>
                        <Link to="">
                          <p>Intimate Care</p>
                        </Link>
                        <Link to="">
                          <p>Shaving Gel & Hair Removal</p>
                        </Link>
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
              <div id="menu-dropdown">
                <Link to="">
                  <div id="menu-title">Fragance</div>
                </Link>
              </div>
              <div id="menu-dropdown">
                <Link to="">
                  <div id="menu-title">Health & Wellness</div>
                </Link>
              </div>
              <div id="menu-dropdown">
                <Link to="">
                  <div id="menu-title">Mom & Baby</div>
                </Link>
              </div>
            </Box>
          </Box>
        </Box>

        <div id="mobile_bar">
          <div style={{ display: "flex", alignItems: "center", gap: "1px" }}>
            <div style={{ marginLeft: "10px" }}>
              <Link to="/">
                <img
                  style={{ width: "100px", height: "25px" }}
                  // src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <HiMenu colorScheme="teal" onClick={onOpen2} size="1.6em" />
              <Drawer
                isOpen={isOpen2}
                placement="left"
                onClose={onClose2}
                height="100vh"
                size="xs"
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  {isAuth ? (
                    <DrawerHeader
                      mt={12}
                      onClick={onClose2}
                      display="flex"
                      gap={12}
                    >
                      <Text> {isAuth ? "Hii " + "username" : "Account"}</Text>
                      <Button bgColor="black" color="white" colorScheme="none">
                        Logout
                      </Button>
                    </DrawerHeader>
                  ) : (
                    <DrawerHeader mt={12}>
                      <Link to="/login" onClick={onClose2}>
                        <Button
                            bgColor="#7427e4"
                          color="white"
                          colorScheme="none"
                        >
                          Login
                        </Button>
                      </Link>
                      <Link to="/signup" onClick={onClose2}>
                        <Button
                          variant="outline"
                          border=" 1px solid black"
                          ml={4}
                          colorScheme="none"
                        >
                          Register
                        </Button>
                      </Link>
                    </DrawerHeader>
                  )}

                  <DrawerBody>
                    <Box display="flex" flexDirection="column" gap="20px">
                      <Link to="" onClick={onClose2}>
                        Makeup
                      </Link>
                      <Link to="" onClick={onClose2}>
                        Skin Care
                      </Link>
                      <Link to="" onClick={onClose2}>
                        Hair Care
                      </Link>
                      <Link to="" onClick={onClose2}>
                        Applicances
                      </Link>
                      <Link to="" onClick={onClose2}>
                        Personal Care
                      </Link>
                      <Link to="" onClick={onClose2}>
                        Men
                      </Link>
                      <Link to="" onClick={onClose2}>
                        Fregance
                      </Link>
                      <Link to="" onClick={onClose2}>
                        Health & Wellness
                      </Link>
                      <Link to="" onClick={onClose2}>
                        Mon & Baby
                      </Link>
                    </Box>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </div>
          </div>

          <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            <InputGroup>
              <Input placeholder="Search Product" />
              <InputRightElement />
            </InputGroup>
          </div>
         
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Link to="/login">
              <CiFaceSmile color="#6b3293" size="1.2em" />
            </Link>
            <div class="dropdown" style={{ paddingRight: "30px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "24px" }}
              >
                <div id="cart-icon">
                  <Link to="/cart">
                    <BsMinecartLoaded color="#6b3293" size="1.2em" />
                    <p className="cartValue">{"cartItems.length"}</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
