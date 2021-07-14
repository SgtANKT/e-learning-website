import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../../components/navbar'
import { InnerPageContainer, PageContainer } from '../../components/pageContainer'
import { deviceSize } from '../../components/responsive'
// import { ServiceCard } from '../../components/serviceCard'
import { Services } from './services'
import { TopSection } from './topSection'
import { Contact } from '../../components/connect'
import { Marginer } from '../../components/marginer'
import { Tasks } from '../../components/tasks'
import { Offerings } from '../../components/offerings'
import { Details } from '../../components/details'



// const Title = styled.h1`
//     font-weight: 900;
//     color: #000;
// `;

const ContentContainer = styled.div`
    width: 100%;
    max-width: ${deviceSize.laptop}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;
`;



export function HomePage(props) {
    return (
        <PageContainer>
            <TopSection>
                <Navbar/>
            </TopSection>
            <InnerPageContainer>
                <Tasks></Tasks>
                <Marginer direction='vertical' margin='5px'></Marginer>
                <Details/>
                <Offerings></Offerings>
                <Marginer direction='vertical' margin='5px'></Marginer>
                <ContentContainer>
                    <Services />
                </ContentContainer>
                <Marginer direction='vertical' margin='5px'></Marginer>
                <Contact></Contact>
            </InnerPageContainer>        
        </PageContainer>
    )
}

