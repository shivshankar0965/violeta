
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Grid, Flex, Menu, MenuButton, MenuItem, MenuList, Select } from '@chakra-ui/react'
import React from 'react'

const Filter = () => {
    return (
        <Flex
            // border={'1px solid lightgrey'}
            alignItems={"center"}
            display={{
                base: 'block',
                md: 'block',
                lg: 'flex'
            }} justifyContent={"space-evenly"} w='80%' m='auto' color={"grey"} marginTop={"2rem"}>

            <Flex>
                <Box>
                    <Menu >
                        <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
                            Brands 
                        </MenuButton>
                        <MenuList  >
                            <MenuItem bg="white" columnGap={"3rem"}>       
                                <Box >
                                    <input type="checkbox" /><span> Faces Canada</span> <br />
                                    <input type="checkbox" /><span> Maliao</span> <br />
                                    <input type="checkbox" /><span> Sugar</span> <br />
                                    <input type="checkbox" /><span> Me-ON</span> <br />
                                    <input type="checkbox" /><span> Milani</span> <br />
                                    <input type="checkbox" /><span> Fashion Color</span> <br />
                                    <input type="checkbox" /><span> Kiss Beauty</span> <br />
                                    <input type="checkbox" /><span> CVB Paris</span> <br />
                                    <input type="checkbox" /><span> Colorbar</span> <br />
                                    <input type="checkbox" /><span> Incolor</span> <br />
                                    <input type="checkbox" /><span> Blue Heavan</span> <br />
                                    <input type="checkbox" /><span> M.A.C</span> <br />
                                </Box>
                                <Box >
                                    <input type="checkbox" /><span> Imagic</span> <br />
                                    <input type="checkbox" /><span> L' Oreal Paris</span> <br />
                                    <input type="checkbox" /><span> Lotus Herbais</span> <br />
                                    <input type="checkbox" /><span> Plum</span> <br />
                                    <input type="checkbox" /><span> Bella Voste</span> <br />
                                    <input type="checkbox" /><span> MyGlamm</span> <br />
                                    <input type="checkbox" /><span> Focallore</span> <br />
                                    <input type="checkbox" /><span> Embryolisse</span> <br />
                                    <input type="checkbox" /><span> Belora</span> <br />
                                    <input type="checkbox" /><span> Kiss Beauty</span> <br />
                                    <input type="checkbox" /><span> Lakme</span> <br />
                                    <input type="checkbox" /><span> Glam 21</span> <br />
                                </Box>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu>
                        <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
                            Price Ranges
                        </MenuButton>
                        <MenuList>
                            <MenuItem bg="white" columnGap={"3rem"}>
                                <Grid display={"block"} justifyContent={"center"} >
                                    <input type="checkbox" /><span> Rs.100 And Below</span> <br />
                                    <input type="checkbox" /><span> Rs.100 - Rs.200 </span> <br />
                                    <input type="checkbox" /><span> Rs.200 - Rs.500</span> <br />
                                    <input type="checkbox" /><span> Rs.500 - Rs.1000</span> <br />
                                    <input type="checkbox" /><span> Rs.1000 - Rs.2000</span> <br />

                                </Grid>

                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>

            <Flex>
                <Box>
                    <Menu>
                        <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
                            Benefits 
                        </MenuButton>
                        <MenuList>
                            <MenuItem bg="white" columnGap={"3rem"}>
                                <Box >
                                    <input type="checkbox" /><span> Hydrating</span> <br />
                                    <input type="checkbox" /><span> Moisturizing</span> <br />
                                    <input type="checkbox" /><span> Nourishing</span> <br />
                                    <input type="checkbox" /><span> Smudgeproof</span> <br />
                                    <input type="checkbox" /><span> Waterproof</span> <br />
                                    <input type="checkbox" /><span> Sweatproof</span> <br />
                                </Box>

                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu>
                        <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
                            Skin Concerns 
                        </MenuButton>
                        <MenuList>
                            <MenuItem bg="white" columnGap={"3rem"}>
                                <Box >
                                    <input type="checkbox" /><span> Signs Of Ageing</span> <br />
                                    <input type="checkbox" /><span> Dark Circles</span> <br />
                                    <input type="checkbox" /><span> Blemishes</span> <br />
                                    <input type="checkbox" /><span> Pigmentations</span> <br />
                                    <input type="checkbox" /><span> Wrinkles</span> <br />
                                    <input type="checkbox" /><span> Clogged Pores</span> <br />
                                    <input type="checkbox" /><span> Oily Skin</span> <br />
                                </Box>

                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>

            <Flex>
                <Box>
                    <Menu>
                        <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
                            Skin Type 
                        </MenuButton>
                        <MenuList>
                            <MenuItem bg="white" columnGap={"3rem"}>
                                <Box >
                                    <input type="checkbox" /><span> Oily Skin</span> <br />
                                    <input type="checkbox" /><span> Combination Skin</span> <br />
                                    <input type="checkbox" /><span> Sensitive Skin</span> <br />
                                    <input type="checkbox" /><span> All Skin types</span> <br />
                                    <input type="checkbox" /><span> Acne Prone Skin</span> <br />
                                    <input type="checkbox" /><span> Normal Skin</span> <br />
                                    <input type="checkbox" /><span> Dry Skin</span> <br />
                                    <input type="checkbox" /><span> Sensitive Skin</span> <br />
                                </Box>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu>
                        <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
                            More Options
                        </MenuButton>
                        <MenuList>
                            <MenuItem bg="white" columnGap={"3rem"}>
                                <Box >
                                    <input type="checkbox" /><span> Base Primer</span> <br />
                                    <input type="checkbox" /><span> Loose Setting Powder</span> <br />
                                    <input type="checkbox" /><span> Gel Primer</span> <br />
                                    <input type="checkbox" /><span> Fixing Spray</span> <br />
                                    <input type="checkbox" /><span> Lip Primer</span> <br />
                                    <input type="checkbox" /><span> Eyeshadow Primer</span> <br />
                                    <input type="checkbox" /><span> Primer Serum</span> <br />
                                    <input type="checkbox" /><span> Oil Primer</span> <br />
                                    <input type="checkbox" /><span> Illuminating Primer</span> <br />
                                    <input type="checkbox" /><span> Highlighting Primer</span> <br />
                                    <input type="checkbox" /><span> 3 in 1 Primer</span> <br />
                                    <input type="checkbox" /><span> Color Correcting Primer</span> <br />
                                </Box>
                                <Box >
                                    <input type="checkbox" /><span> Lip Crayon</span> <br />
                                    <input type="checkbox" /><span> Primer Stick</span> <br />
                                    <input type="checkbox" /><span> Foundation</span> <br />
                                    <input type="checkbox" /><span> Face Primer</span> <br />
                                    <input type="checkbox" /><span> Setting Mist</span> <br />
                                    <input type="checkbox" /><span> Eye Primer</span> <br />
                                    <input type="checkbox" /><span> Strobing Cream</span> <br />
                                    <input type="checkbox" /><span> Liquid Primer</span> <br />
                                    <input type="checkbox" /><span> Makeup Fixer</span> <br />
                                    <input type="checkbox" /><span> Primer</span> <br />
                                    <input type="checkbox" /><span> Liquid Foundation</span> <br />
                                    <input type="checkbox" /><span> Priming Moisturizer</span> <br />
                                </Box>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>

            <Box >
                <Select placeholder='Sort By Relevance' border={"0px"} >
                    <option value='option1'>Discount</option>
                    <option value='option2'>Low to high</option>
                    <option value='option3'>High to low</option>
                    <option value='option3'>Rating</option>
                </Select>
            </Box>

        </Flex>
    )
}

export default Filter