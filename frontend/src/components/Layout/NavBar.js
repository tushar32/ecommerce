import React   from 'react'
import { Avatar, IconBadge, IconContainer, Logo, NavRight, NavbarContainer, NavigationWrapper } from '../../assets/styles/Navigation.style'


    
const NavBar = () => {
    return(
        <NavbarContainer>
            <NavigationWrapper>
                <div>
                    <Logo> Admin </Logo>
                </div>
                <NavRight>
                    <IconContainer>
                        <IconBadge>5</IconBadge>
                    </IconContainer>

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