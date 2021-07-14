import React from 'react'
import styled from 'styled-components'
import Laptop from '../../images/toplap.jpg'
import Learn from '../../images/Learn.png'
import { Marginer } from '../marginer'
import Support from '../../images/supp.png'
import Chat from '../../images/chat.png'


// background image css
const TopSectionContainer = styled.div`
    width: 100%;
    height: 560px;
    /* background-color: #d2fcb07b; */
    background-color: #ddf8c6a4;
    background-position: 0px -150px;
    background-size: cover;
`;


// top container css
const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

// front right image css
const StandDownImg = styled.div`
    width: 26em;
    height: 25em;

    img{
        width: 100%;
        height: 100%;
    }
`;

// top left logo container css
const LogoContainer = styled.div`
    display: flex;
    /* align-items: flex-start; */
    /* justify-content: center; */
    flex-direction: column;

`;

const SloganContainer = styled.div`
    width: 580px;
    text-align: left;
    cursor: default;
`;

// Slogan text css
const SloganText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: #000;
    font-weight: 400;
    font-size: 20px;
`;

const BrandLogoContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
`;

const LogoImage = styled.div`
    width: 1.8em;
    height: 1.8em;

    img {
        width: 100%;
        height: 100%;
    }
`;

const LogoTitle = styled.h2`
    margin: 0;
    font-size: 18px;
    color: #000000;
    font-weight: 600;
    margin-left: 6px;
`;


export function Details(props) {

    return (
        <TopSectionContainer>

                <TopSectionInnerContainer> 
                    <StandDownImg>
                        <img src={Laptop} alt='aBest'/>
                    </StandDownImg> 
                    <LogoContainer>
                        <Marginer direction='horizontal' margin={10} />
                        <SloganContainer>
                        <SloganText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere expedita ducimus, provident accusantium hic aut illum culpa ipsam, placeat ex atque? Voluptatem eaque qui a consequatur aliquid atque recusandae officiis.
                        </SloganText>
                        </SloganContainer>
                        <Marginer direction='vertical' margin={20} />
                        <BrandLogoContainer>
                            <LogoImage>
                                <img src={Learn} alt='Elearning'/>
                            </LogoImage>
                            <Marginer direction='horizontal' margin={5}/>
                            <LogoTitle>Learn Anything</LogoTitle>
                        </BrandLogoContainer>
                        <Marginer direction='vertical' margin={20} />
                        <BrandLogoContainer>
                            <LogoImage>
                                <img src={Support} alt='Elearning'/>
                            </LogoImage>
                            <Marginer direction='horizontal' margin={5}/>
                            <LogoTitle>Talk To Us</LogoTitle>
                        </BrandLogoContainer>
                        <Marginer direction='vertical' margin={20} />
                        <BrandLogoContainer>
                            <LogoImage>
                                <img src={Chat} alt='Elearning'/>
                            </LogoImage>
                            <Marginer direction='horizontal' margin={5}/>
                            <LogoTitle>Chat with others</LogoTitle>
                        </BrandLogoContainer>
                    </LogoContainer>

                </TopSectionInnerContainer>
        </TopSectionContainer>
    )
}

