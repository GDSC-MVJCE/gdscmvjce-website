import React from 'react'
import Avatar from '../avatar/Avatar'
import { MainContainer, TextContainer } from './AvatarCard.styled'
import { useTheme } from 'styled-components'
import Typography from '../display/typography/Typography'

const AvatarCard = ({ name, role, ...avatarProps }) => {
    const theme = useTheme();
    return <MainContainer>
        <Avatar {...avatarProps} />
        <TextContainer>
            <Typography variant='h4'>{name}</Typography>
            <Typography variant='body'>{role}</Typography>
        </TextContainer>
    </MainContainer>
}

export default AvatarCard