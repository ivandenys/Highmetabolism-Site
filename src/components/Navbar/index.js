import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
    NavItem, NavLinks, NavBtn, NavBtnLink, NavImg
} from './NavbarElements'
import Image from '../../images/logo-white.png';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    {/* commented out below - tutorial did not comment this out */}
                    <NavLogo to="/">
                        HIGH METABOLISM
                    </NavLogo>
                    {/* <NavImg src={Image} type='image/png'>

                    </NavImg> */}
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="programs">Programs</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="merch">Merch</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to="store">Store</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="gallery">Gallery</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar