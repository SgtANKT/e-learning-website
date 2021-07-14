import React from 'react'
import styled from 'styled-components'
import { BrandLogo } from '../../components/brandLogo'
import { Marginer } from '../marginer';


const FooterContainer = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 3em;
    padding-bottom: 0;
    /* border-top: 0.6px solid rgb(0, 0, 0, 0.3); */
`;

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    border-top: 0.6px solid rgb(0, 0, 0, 0.3);
    margin-bottom: 1em;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 2em;
    &:not(:last-of-type) {
        margin-right: 1%;
    }
`;

const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-top: 0.6px solid rgb(0, 0, 0, 0.3);
    padding: 0 10px;
`;

const RightBottomContainer = styled.div`
    display: flex;
`;

const LeftBottomContainer = styled.div`
    display: flex;
`;

const Title = styled.h2`
    margin: 0;
    margin-bottom: 13px;
    color: #000;
    font-weight: 600;
    font-size: 20px;
`;

const Flink = styled.a`
    text-decoration: none;
    color: #6f6f6f;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;

    &:not(:last-of-type) {
        margin-bottom: 8px;
    }
`;

const PrivacyText = styled.h6`
    color: #a3a3a3;
    font-size: 11px;
    margin: 0;
    margin-left: 10px;
    display: flex;
    margin-top: 5px;
    align-items: center;
`;

export function Footer() {
    return (
        <FooterContainer>
            <TopContainer>
                <ContentContainer>
                    <Marginer direction='vertical' margin={20}/>
                    <Title>Categories</Title>
                    <Flink>Art</Flink>
                    <Flink>Banking</Flink>
                    <Flink>Computers</Flink>
                    <Flink>Management</Flink>
                    <Flink>Finance</Flink>
                    <Flink>Language</Flink>
                    <Flink>Literature</Flink>
                </ContentContainer>
                <ContentContainer>
                <Marginer direction='vertical' margin={20}/>
                    <Title>Access</Title>
                    <Flink>Login</Flink>
                    <Flink>Join Us</Flink>
                    <Flink>Login as User</Flink>
                    <Flink>Login as Enterprise</Flink>
                </ContentContainer>
            </TopContainer>
            <BottomContainer>
                <LeftBottomContainer>
                    <BrandLogo hideLogo color='#8A8A8A' logoSize={20} textSize={25}/>
                </LeftBottomContainer>
                <RightBottomContainer>
                    <PrivacyText>
                        All Rights Reserved. 2021
                    </PrivacyText>
                </RightBottomContainer>
            </BottomContainer>
        </FooterContainer>
    )
}
