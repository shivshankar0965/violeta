import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Grid, Flex,  Menu, MenuButton, MenuItem, MenuList, Select } from '@chakra-ui/react'
import React from 'react'

const Filter = () => {
    return (
        <Flex
        border={'1px solid black'}
            alignItems={"center"} 
            display={{
                base: 'block',
                md: 'block',
                lg: 'flex'
            }} justifyContent={"space-evenly"} w='80%' m='auto'>
            <Flex>

                <Box>
                    <Menu >
                        <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
                            Brands All
                        </MenuButton>
                        <MenuList  >
                            <MenuItem bg="white" columnGap={"3rem"}>
                                <Box >
                                    <input type="checkbox" /><span> Maliao</span> <br />
                                    <input type="checkbox" /><span> Sugar</span> <br />
                                    <input type="checkbox" /><span> Me-ON</span> <br />
                                    <input type="checkbox" /><span> Milani</span> <br />
                                    <input type="checkbox" /><span> Fashion Color</span> <br />
                                    <input type="checkbox" /><span> Kiss Beauty</span> <br />
                                    <input type="checkbox" /><span> CVB Paris</span> <br />
                                    <input type="checkbox" /><span> Colorbar</span> <br />
                                </Box>
                                <Box >
                                    <input type="checkbox" /><span> Faces Canada</span> <br />
                                    <input type="checkbox" /><span> Blue Heavan</span> <br />
                                    <input type="checkbox" /><span> Incolor</span> <br />
                                    <input type="checkbox" /><span> M.A.C</span> <br />
                                    <input type="checkbox" /><span> Imagic</span> <br />
                                    <input type="checkbox" /><span> L' Oreal Paris</span> <br />
                                    <input type="checkbox" /><span> Lotus Herbais</span> <br />
                                    <input type="checkbox" /><span> Plum</span> <br />
                                </Box>
                                <Box >
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
                            Price
                        </MenuButton>
                        <MenuList>
                            <MenuItem bg="white" columnGap={"3rem"}>
                                <Grid display={"block"} justifyContent={"center"} >
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
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
                            Brands All
                        </MenuButton>
                        <MenuList>
                            <MenuItem bg="white" columnGap={"3rem"}>
                                <Box >
                                    <input type="checkbox" /><span> NY</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                </Box>
                                <Box >
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                </Box>
                                <Box >
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                </Box>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu>
                        <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
                            Brands All
                        </MenuButton>
                        <MenuList>
                            <MenuItem bg="white" columnGap={"3rem"}>
                                <Box >
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                </Box>
                                <Box >
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                </Box>
                                <Box >
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
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
                            Brands All
                        </MenuButton>
                        <MenuList>
                            <MenuItem bg="white" columnGap={"3rem"}>
                                <Box >
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                </Box>
                                <Box >
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                </Box>
                                <Box >
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                </Box>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu>
                        <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
                            Brands All
                        </MenuButton>
                        <MenuList>
                            <MenuItem bg="white" columnGap={"3rem"}>
                                <Box >
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                </Box>
                                <Box >
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                </Box>
                                <Box >
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                    <input type="checkbox" /><span> NY BAE</span> <br />
                                </Box>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>

            <Box>
                <Select placeholder='Sort By Relevance'>
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