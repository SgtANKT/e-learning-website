import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../../images/study.png' 
import {Marginer} from '../../components/marginer'
import bestImg from '../../images/aaa.png' 
import { BrandLogo } from '../../components/brandLogo'
import { Button } from '../../components/button'


// background image css
const TopSectionContainer = styled.div`
    width: 100%;
    height: 760px;
    background: url(${backgroundImage});
    background-position: 0px -150px;
    background-size: cover;
`;

// background filter css
const BackgrouundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(44, 43, 43, 0.9);
    display: flex;
    flex-direction: column;
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
    align-items: flex-start;
    flex-direction: column;

`;

// Slogan text css
const SloganText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: #ffff;
    font-weight: 400;
    font-size: 25px;
`;

export function TopSection(props) {

    const { children } = props;

    return (
        <TopSectionContainer>
            <BackgrouundFilter>
                {children}
                <TopSectionInnerContainer>  
                    <LogoContainer>
                        <BrandLogo logoSize={45} textSize={40}/>
                        <Marginer direction='vertical' margin={9} />
                        <SloganText>
                            Find the course compare them be sure of your future
                        </SloganText>
                        <SloganText>
                            and make the right career choice
                        </SloganText>
                        <Marginer direction='vertical' margin={15} />
                        <Button>Join Now</Button>

                    </LogoContainer>
                    <StandDownImg>
                        <img src={bestImg} alt='aBest'/>
                    </StandDownImg>
                </TopSectionInnerContainer>
            </BackgrouundFilter>
        </TopSectionContainer>
    )
}

