import React from 'react'
import { MainContainer, LeftContainer, RightContainer, LeftInnerContainer, HeadingContainer, } from './Intro.styled'
import IntroImage from '@public/images/intro.svg'
import Typography from '../display/typography/Typography';



function Intro() {
    return <MainContainer>
        <LeftContainer>
            <LeftInnerContainer>
                <HeadingContainer><Typography variant='h1'>Why join GDSC?</Typography></HeadingContainer>

                <Typography variant='body' >Join us to embark on a journey of learning, collaboration, and personal growth. With a range of workshops, competitions, mentorship programs, and networking events, we provide the platform for you to enhance your technical skills and connect with like-minded individuals.
                </Typography>
                <Typography variant='body' >

                    As a member of our vibrant community, you'll have the opportunity to collaborate on exciting projects, exchange ideas, and inspire each other to push the boundaries of innovation. Together, let's shape the future of technology and make a positive impact on the world.
                </Typography>
            </LeftInnerContainer>

        </LeftContainer>
        <RightContainer>

            <IntroImage />
        </RightContainer>
    </MainContainer >
}

export default Intro
