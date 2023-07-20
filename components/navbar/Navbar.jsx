import React from 'react'
import { MainContainer, NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavLink } from './Navbar.styled'
import Logo from '../../public/logo.svg'

function Navbar() {
    return <MainContainer>
        <NavbarContainer>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Logo />
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/Events'}>Events</NavLink>
                        <NavLink href={'/Team'}>Team</NavLink>
                        <NavLink href={'/Newsletter'}>Newsletter</NavLink>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            <NavbarExtendedContainer></NavbarExtendedContainer>
        </NavbarContainer>
    </MainContainer>
}

export default Navbar