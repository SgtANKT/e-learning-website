import React from 'react'
import styled from 'styled-components'
import ima from '../../images/teens_school.jpg'
import im from '../../images/jj.jpg'
import imag from '../../images/studyyy.jpg'
import imge from '../../images/stairs.jpg'
import pic from '../../images/coll.jpg' 


const MainContainer = styled.div`
    background-color: #000;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-weight: 900;
    color: #ffff;
`;

const DataWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    /* padding-left: 80px; */
    padding-bottom: 40px;
`;

const DataBox = styled.div`
    background-color: #018508;
    width:270px;
    height: 260px;
    display: flex;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 3px 8px 13px #376d3a;
    transition: 0.3s ease-in-out;
    position: relative;
    flex-direction: column;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.4;
}

    &:hover {
        box-shadow: 2px 2px 12px #376d3aa2;
    }
`;

const TextWrapper = styled.div`
    position: absolute;
    width: 280px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: default ;
`;

const DescWrapper = styled.div`
    position: absolute;
    width: 180px;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: default;
`;

const TitleText = styled.h1`
    font-size:20px;
    margin: 0;
    font-weight: bolder;
    color: #ffffff;
    text-align: center;
    
`;
const DescDetails= styled.h4`
    margin: 0;
    color: #ffffff;
    font-size: 16px;
    
    /* font-weight: 300; */
`;



export function Offerings(props) {
    return (
        <MainContainer>
            <Title>OUR CATALOGUE INCLUDES</Title>
            <DataWrapper>
            <DataBox>
                <img src= {ima} alt={'lol'} />
                <TextWrapper>
                    <TitleText>
                        PRE-COLLEGE COURSES
                    </TitleText>
                </TextWrapper>
                <DescWrapper>
                    <DescDetails>
                    Broaden the creative horizons of your kids
                    </DescDetails>
                </DescWrapper>
            </DataBox>
            <DataBox>
                <img src= {im} alt={'lol'} />
                <TextWrapper>
                    <TitleText>
                        MIDDLE SCHOOL COURSES
                    </TitleText>
                </TextWrapper>
                <DescWrapper>
                    <DescDetails>
                    Broaden the creative horizons of your kids
                    </DescDetails>
                </DescWrapper>
            </DataBox>
            <DataBox>
                <img src= {imag} alt={'lol'} />
                <TextWrapper>
                    <TitleText>
                        HIGH SCHOOL COURSES
                    </TitleText>
                </TextWrapper>
                <DescWrapper>
                    <DescDetails>
                    Broaden the creative horizons of your kids
                    </DescDetails>
                </DescWrapper>
            </DataBox>
            <DataBox>
                <img src= {imge} alt={'lol'} />
                <TextWrapper>
                    <TitleText>
                        GRADGUATE PROGRAMS
                    </TitleText>
                </TextWrapper>
                <DescWrapper>
                    <DescDetails>
                    Broaden the creative horizons of your kids
                    </DescDetails>
                </DescWrapper>
            </DataBox>
            <DataBox>
                <img src= {pic} alt={'lol'} />
                <TextWrapper>
                    <TitleText>
                        HOME EDUCATION FACILITIES
                    </TitleText>
                </TextWrapper>
                <DescWrapper>
                    <DescDetails>
                    Broaden the creative horizons of your kids
                    </DescDetails>
                </DescWrapper>
            </DataBox>
            </DataWrapper>
        </MainContainer>
    )
}





