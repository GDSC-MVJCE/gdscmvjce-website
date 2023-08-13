import React from 'react'
import { useTheme } from 'styled-components'
import { MainContainer, Heading, LeadContainer, CoreMainContainer, CoreSubContainer, SubMainContainer, SubSubContainer } from './teamsPage.styled'
import AvatarCard from '../avatarCard/AvatarCard'
import Typography from '../display/typography/Typography'

function teamsPage() {
    const theme = useTheme()

    const lead = [{
        name: 'Aishwarya B.S',
        role: 'GDSC Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/117747414?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px',
    }]

    const core = [{
        name: 'Shivam Sharma',
        role: 'Tech Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/111264028?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px'

    },
    {
        name: 'Shivam Sharma',
        role: 'Tech Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/111264028?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px'

    }, {
        name: 'Shivam Sharma',
        role: 'Tech Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/111264028?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px'

    }, {
        name: 'Shivam Sharma',
        role: 'Tech Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/111264028?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px'

    }, {
        name: 'Shivam Sharma',
        role: 'Tech Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/111264028?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px'

    },
    {
        name: 'Shivam Sharma',
        role: 'Tech Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/111264028?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px'

    },]

    const sub = [{
        name: 'Shivam Sharma',
        role: 'Tech Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/111264028?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px'

    },
    {
        name: 'Shivam Sharma',
        role: 'Tech Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/111264028?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px'

    }, {
        name: 'Shivam Sharma',
        role: 'Tech Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/111264028?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px'

    }, {
        name: 'Shivam Sharma',
        role: 'Tech Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/111264028?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px'

    }, {
        name: 'Shivam Sharma',
        role: 'Tech Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/111264028?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px'

    },
    {
        name: 'Shivam Sharma',
        role: 'Tech Lead',
        size: 'xl',
        url: "https://avatars.githubusercontent.com/u/111264028?v=4",
        borderColor: theme?.colors.brandBlue,
        blur: false,
        borderWidth: '10px'

    },]

    return <MainContainer>
        <Heading> <Typography variant='h1' color={theme?.colors.brandBlue} style="margin-bottom: 2em ">GDSC TEAM 2023-24</Typography></Heading>

        <LeadContainer>
            {lead.map((leadMember, index) => (
                <AvatarCard key={index} name={leadMember.name} role={leadMember.role} size={leadMember.size}
                    url={leadMember.url}
                    borderColor={leadMember.borderColor}
                    blur={leadMember.blur}
                    borderWidth={leadMember.borderWidth} />
            ))}

        </LeadContainer>
        <CoreMainContainer>
            <Typography variant='h2'>Core Team</Typography>
            <CoreSubContainer>
                {core.map((coreMember, index) => (
                    <AvatarCard name={coreMember.name} role={coreMember.role} size={coreMember.size}
                        url={coreMember.url}
                        borderColor={coreMember.borderColor}
                        blur={coreMember.blur}
                        borderWidth={coreMember.borderWidth} />
                ))}

            </CoreSubContainer>
        </CoreMainContainer>
        <SubMainContainer>
            <Typography variant='h2'>Sub-Team Members</Typography>
            <SubSubContainer>
                {sub.map((subMember, index) => (
                    <AvatarCard key={index} name={subMember.name} role={subMember.role} size={subMember.size}
                        url={subMember.url}
                        borderColor={subMember.borderColor}
                        blur={subMember.blur}
                        borderWidth={subMember.borderWidth} />
                ))}

            </SubSubContainer>
        </SubMainContainer>
    </MainContainer>
}
export default teamsPage