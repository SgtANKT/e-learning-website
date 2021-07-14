import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../marginer';
import Idea from '../../images/idea.png'
import Study from '../../images/study.png'
import Learn from '../../images/GRAPH.jpg'
import Guide from '../../images/guide.png'
import Compare from '../../images/comparison.png'



const FeatureContainer = styled.div`
    /* background-color: #00a708; */
    background-color: #ffff;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FeatureWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    padding-bottom: 40px;
`;

const Title = styled.h1`
    font-weight: 900;
    margin-top: 0px;
    color: #000;
`;

const FeatureBox = styled.div`
    background-color: #eeeeee;
    width:200px;
    height: 355px;
    display: flex;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 20px 27px rgba(0,0,0,0.1);
    transition: 0.3s ease-in-out;
    position: relative;
    flex-direction: column;

    &:hover {
        cursor: default;
        background-color: #e0e0e0;
        transition: 0.6s ease-in-out;
        box-shadow: 2px 2px 12px rgba(0,0,0,0.1);
    }
`;

const ImageContainer = styled.div`
    display: flex;
    width: 95%;
    height: 50%;
    
    img {
        margin-top: 5px;
        margin-left: 8px;
        padding: 20px;
        width: 100%;
        height: 100%;
    }

`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(15,15,15,0.19) ;
`;

const DiscContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(15,15,15,0.19) ;
    padding: 0 10px;
`;

const Slogan = styled.h2`
    margin-top: 6px;
    margin-bottom: 6px;
    width: 100%;
    display:flex;
    flex-direction: column;
`;

const SloganText = styled.p`
    color:#000130be;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: calibri;
    display: flex;
`;

export function Tasks(props){
    return (
        <FeatureContainer> 
            <Marginer direction='vertical' margin='30px'/>
            <Title>OUR SPECIALITY</Title>   
            <FeatureWrapper>
                <FeatureBox>
                    <ImageContainer><img src={Idea} alt='img'/></ImageContainer>
                    <TitleContainer><Slogan>Career Advice</Slogan></TitleContainer>
                    <DiscContainer><SloganText>We advice people to opt for better choices</SloganText></DiscContainer>
                </FeatureBox>
                <Marginer direction='horizontal' margin='20px'/>
                <FeatureBox>
                    <ImageContainer><img src={Study} alt='img'/></ImageContainer>
                    <TitleContainer><Slogan>Study Along</Slogan></TitleContainer>
                    <DiscContainer><SloganText>By helping make better choice we provide you with better study opportunities</SloganText></DiscContainer>
                </FeatureBox>
                <Marginer direction='horizontal' margin='20px'/>
                <FeatureBox>
                    <ImageContainer><img src={Learn} alt='img'/></ImageContainer>
                    <TitleContainer><Slogan>Popular studies</Slogan></TitleContainer>
                    <DiscContainer><SloganText>We provide you with information on what is in demand and give you insights over it</SloganText></DiscContainer>
                </FeatureBox>
                <Marginer direction='horizontal' margin='20px'/>
                <FeatureBox>
                    <ImageContainer><img src={Guide} alt='img'/></ImageContainer>
                    <TitleContainer><Slogan>Personal Guide</Slogan></TitleContainer>
                    <DiscContainer><SloganText>We provide you with plethora of information from wich you can decide what to take and what not to take</SloganText></DiscContainer>
                </FeatureBox>
                <Marginer direction='horizontal' margin='20px'/>
                <FeatureBox>
                    <ImageContainer><img src={Compare} alt='img'/></ImageContainer>
                    <TitleContainer><Slogan>Compare courses</Slogan></TitleContainer>
                    <DiscContainer><SloganText>We also provide you the ability of comparing courses side by side</SloganText></DiscContainer>
                </FeatureBox>
                <Marginer direction='horizontal' margin='20px'/>
            </FeatureWrapper>
            </FeatureContainer>   
    )   
}