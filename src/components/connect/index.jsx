import React from 'react'
import styled from 'styled-components'
import { BrandLogo } from '../brandLogo'
import { Marginer } from '../marginer';
import StImg from '../../images/st.png'
import { Button } from '../button';

const SpecialistAddContainer = styled.div`
    /* margin-top: 10px; */
    width: 100%;
    height: 500px;
    display: flex;
    background-color: #264653;
    align-items: center;
    justify-content: center;
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SloganContainer = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* margin-right: 2em; */
`;

const Slogan = styled.h2`
    margin: 0;
    font-size: 20px;
    color: #ffff;
    font-weight: 700;
    line-height: 1.3;
`;

const StandoutImage = styled.div`
    width: 30em;
    height: 24em;
    margin-left: 100px;
    img {
        width: 100%;
        height: 100%;
    }
`;

export function Contact(props) {
    return (
        <SpecialistAddContainer>
            <ContentContainer>
                <SloganContainer>
                    <BrandLogo logoSize={35} textSize={20}/>
                    <Marginer direction='vertical' margin='3px' />
                    <SloganContainer>
                        <Slogan>To know about us or to get details</Slogan>
                        <Slogan>You can contact us at our centers or email at</Slogan>
                        <Slogan>This @ gmail or our number</Slogan>
                    </SloganContainer>
                    <Marginer direction='vertical' margin='1px'/>
                    <Button size={15}>Contact Us</Button>
                </SloganContainer>
                <StandoutImage>
                    <img src = {StImg} alt='Hello' />
                </StandoutImage>
            </ContentContainer>
        </SpecialistAddContainer>
    )
}
