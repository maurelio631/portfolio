import React from "react";
import StyledFooter from "../Styles/Footer";

const Footer = (props)=>{
    return(
        <StyledFooter>
            {props.children}
        </StyledFooter>
    )
}

export default Footer;