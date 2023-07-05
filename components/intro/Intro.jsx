import React from 'react'
import { MainContainer, LeftContainer, RightContainer, LeftInnerContainer, HeadingContainer, } from './Intro.styled'
import { motion, easeInOut } from 'framer-motion'
import IntroImage from '@public/images/intro.svg'
import Typography from '../display/typography/Typography';

const svgVariants = {
    hidden: {
        opacity: 0,
        pathLenght: 0
    },
    visible: {
        opactiy: 1,
        pathLength: 1,
        transition: {
            duration: 1,
            ease: easeInOut,
        }
    }
}
export const ImageContainer = () => (
    <motion.div
        variants={svgVariants}
        initial="hidden"
        animate="visible"
    />
)


function Intro() {
    return <MainContainer>
        <LeftContainer>
            <LeftInnerContainer>
                <HeadingContainer><Typography variant='h1'>Why join GDSC?</Typography></HeadingContainer>

                <Typography variant='body'>Join us to embark on a journey of learning, collaboration, and personal growth. With a range of workshops, competitions, mentorship programs, and networking events, we provide the platform for you to enhance your technical skills and connect with like-minded individuals.

                    <br></br>
                    <br></br>
                    As a member of our vibrant community, you'll have the opportunity to collaborate on exciting projects, exchange ideas, and inspire each other to push the boundaries of innovation. Together, let's shape the future of technology and make a positive impact on the world.
                </Typography>
            </LeftInnerContainer>

        </LeftContainer>
        <RightContainer>

            <IntroImage />
        </RightContainer>
    </MainContainer>
}

export default Intro
