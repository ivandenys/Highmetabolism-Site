import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
    NavItem, NavLinks, NavBtn, NavBtnLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        DREEMA
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="music">Music</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="shows">Shows</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="store">Store</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="gallery">Gallery</NavLinks>
                        </NavItem>
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