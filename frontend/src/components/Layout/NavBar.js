import React   from 'react'
import { Avatar, IconBadge, IconContainer, Logo, NavRight, NavbarContainer, NavigationWrapper } from '../../assets/styles/Navigation.style'
import { Badge, Dropdown } from 'react-bootstrap'


    
const NavBar = () => {
    return(
        <NavbarContainer>
            <NavigationWrapper>
                <div>
                    <Logo> Admin </Logo>
                </div>
                <NavRight>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Cart Button
                    </Dropdown.Toggle>

                    <IconContainer>
                        <IconBadge>3</IconBadge>
                    </IconContainer>
                    <Avatar src=""></Avatar>
                </NavRight>
            </NavigationWrapper>
            
        </NavbarContainer>
    )
}

export default NavBar