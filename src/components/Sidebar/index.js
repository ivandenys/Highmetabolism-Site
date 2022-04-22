import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <sidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="music" onClick={toggle}>
                        Music
                    </SidebarLink>
                    <SidebarLink to="shows" onClick={toggle}>
                        Shows
                    </SidebarLink>
                    <SidebarLink to="store" onClick={toggle}>
                        Store
                    </SidebarLink>
                    <SidebarLink to="gallery" onClick={toggle}>
                        Gallery
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </sidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;