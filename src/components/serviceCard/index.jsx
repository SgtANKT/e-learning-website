import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../marginer';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 280px;
    min-height: 250px;
    background-color: #ffff;
    box-shadow: 0 0 3px rgba(0,0,0,0.37) ;
    margin: 0px 0.5em;
    margin-bottom: 1.3em;
`;



const TopContainer = styled.div`
    width: 100%;
`;

const ServiceThumbnail = styled.div`
    width: 100%;
    height: 11em;

    img {
        width: 100%;
        height: 100%;
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    padding: 15px 14px;
`;

const BottomContainer = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(15,15,15,0.19) ;
    padding: 0 10px;
`;

const Title = styled.h2`
    font-size:16.3px;
    margin: 0;
    font-weight: 500;
    color: #000;
    text-align: start;
`;

const SpecalistName= styled.h4`
    margin: 0;
    color: rgba(151, 151, 151, 1);
    font-size: 12px;
    font-weight: 400;
`;

const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    color: #EBE204;
`;

const ReviewContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ReviewText = styled.div`
    margin-left: 3px;
    padding-bottom: 1.5px;
    color: #2ba679;
    font-weight: 800;
`;

const StaringAtText = styled.h6`
    margin: 0;
    color: rgba(161,161,161);
    font-weight: 300;
`;

export function ServiceCard(props) {
    const { thumbnailUrl, provider, title, reviews, rating } = props;
    return (
        <CardContainer>
        <TopContainer>
            <ServiceThumbnail>
            <img src={thumbnailUrl} alt={title} />
            </ServiceThumbnail>
        </TopContainer>
        <ContentContainer>
            <Title>{title}</Title>
            <Marginer direction='vertical' margin={10}/>
            <SpecalistName>{provider.name}</SpecalistName>
        </ContentContainer>
        <BottomContainer>    
            <RatingContainer>
                <FontAwesomeIcon icon={faStar} size='sm'/>
                {rating}
            </RatingContainer>
            <ReviewContainer>
                <StaringAtText>
                    REVIEWS: 
                </StaringAtText>
            <ReviewText>
                {reviews}
            </ReviewText>
            </ReviewContainer>
            {console.log("Provicer: ",provider.name,"Title:", title,"Reviews", reviews,"Ratings", rating)}
        </BottomContainer>
        </CardContainer>
    )
}
