import React from 'react'
import styled from 'styled-components'
import { BrandLogo } from '../brandLogo';
import { Button } from '../button';
import { Marginer } from '../marginer';

const NavbarContainer = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5em;
`;

const AccessibilityContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const AnchorLink = styled.a`
    font-size: 14px;
    color: #ffff;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    transition: all 200ms ease-in-out;

    &:hover {
        filter: contrast(0.6);
    }
`;

const Seperator = styled.div`
    height: 50%;
    width: 1px;
    background-color: #ffff;
`;

export function Navbar() {
    return (
        <NavbarContainer>
            <BrandLogo/>    
            <AccessibilityContainer>
                <AnchorLink>Courses</AnchorLink>
                <Marginer direction='horizontal' margin={30}/>                
                <AnchorLink>AboutUs</AnchorLink>
                <Marginer direction='horizontal' margin={30}/>                
                <AnchorLink>Programs</AnchorLink>
                <Marginer direction='horizontal' margin={20}/>                
                <Seperator/>
                <Marginer direction='horizontal' margin={20}/>
                <Button size = {14}>Sign Up</Button>
                <Marginer direction='horizontal' margin={30}/>
                <AnchorLink>Login</AnchorLink>
            </AccessibilityContainer>        
        </NavbarContainer>
    )
}

