import React from "react";
import { Box} from "@chakra-ui/react";
import {AiOutlineClose,AiOutlineMenu} from "react-icons"

const MenuToggle =({toggle,isOpen})=>{
    return(
        <Box display={{base:"block", md:"none"}} onClick={toggle}>
            {isOpen ? <AiOutlineClose/> : <AiOutlineMenu/>}
        </Box>
    )
}

export default MenuToggle