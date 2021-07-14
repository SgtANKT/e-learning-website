import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../images/lg.png'
import { Marginer } from '../marginer';

const BrandLogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImage = styled.div`
    width: ${({ size }) => size ? size + 'px' : '2em'};
    height: ${({ size }) => size ? size + 'px' : '2em'};

    img {
        width: 100%;
        height: 100%;
    }
`;

const LogoTitle = styled.h2`
    margin: 0;
    font-size: ${({ size }) => size ? size + 'px' : '20px'};
    color: #ffff;
    font-weight: 600;
    margin-left: 6px;
`;

export function BrandLogo(props) {
    const { logoSize, textSize } = props;
    return (
        <BrandLogoContainer>
            <LogoImage size={logoSize}>
                <img src={LogoImg} alt='Elearning'/>
            </LogoImage>
            <Marginer direction='horizontal' margin={5}/>
            <LogoTitle size={textSize}>E-LEARNING</LogoTitle>
        </BrandLogoContainer>
    )
}

