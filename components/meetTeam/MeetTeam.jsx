import React from 'react'
import { MainContainer, LeftContainer, RightContainer, MeetButton } from './MeetTeam.styled'
import Avatar from '../avatar/Avatar'
import Typography from '../display/typography/Typography'

function MeetTeam() {
    return <MainContainer>
        <LeftContainer className="container">
            <Avatar size='xl' borderColor={'#4285F4'} borderWidth={'0.7em'} url={'https://avatars.githubusercontent.com/u/35398866?v=4'} className="first" />
            <Avatar size='xl' borderColor={'#0F9D58'} borderWidth={'0.7em'} url={'https://avatars.githubusercontent.com/u/94698713?v=4'} className="second" />
            <Avatar size='xl' borderColor={'#EA4335'} borderWidth={'0.7em'} url={'https://avatars.githubusercontent.com/u/102166167?v=4'}
                className="third" />

        </LeftContainer>
        <RightContainer>
            <Typography variant='h1'>Discover the great minds behind GDSC</Typography>
            <MeetButton>Meet our team</MeetButton>
        </RightContainer>
    </MainContainer >
}

export default MeetTeam