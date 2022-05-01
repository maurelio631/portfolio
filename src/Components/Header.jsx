import { Box, Flex, Stack } from "@chakra-ui/react";
import { React, useState } from "react";
import MenuToggle from "./MenuToggle";

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <MenuToggle toggle={toggle} isOpen={isOpen} />
    )
}

const MenuLinks = ({ isOpen }) => {
    return (
        <Box display={{ base: isOpen ? "block" : "none", md: "block" }}>
            <Stack spacing="8" align="center" justify={["center", "space-between", "flex-end","flex-end"]}>

            </Stack>
        </Box>
    )
}

const NavbarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb="8"
            p="8"
            bg="black"
            color="white"
            {...props}
        >
            {children}
        </Flex>
    )
}

export default Navbar