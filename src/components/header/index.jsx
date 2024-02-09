// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Portal from '../../assets/Portal.png'
import { HeaderContainer, HeaderWrapper, LinksWrapper, LoginWrapper, PortalWrapper } from '../../styles/header';

const Header=()=>{
  return (
        <HeaderContainer>
            <HeaderWrapper>
                <LinksWrapper>
                    <p>[as]</p>
                    <Link to="/">Episodes</Link>
                    <Link to="/characters">Characters</Link>
                </LinksWrapper>
                <PortalWrapper>
                    <img src={Portal} alt='Error'/>
                </PortalWrapper>
                <LoginWrapper>
                    <p>Login</p>
                    <p>SignUp</p>
                </LoginWrapper>
            </HeaderWrapper>
        </HeaderContainer>
  )
}

export default Header