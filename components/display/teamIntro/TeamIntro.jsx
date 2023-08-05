import React, { useEffect, useRef, useState } from 'react';
import {
  TeamButton,
  TeamDescriptionSection,
  TeamIntroContainer,
  TeamIntroSectionWrapper,
  TeamTitlesSection,
} from './TeamIntro.styled';
import Typography from '../typography/Typography';
import Terminal from './subcomponents/terminal/Terminal';

const TeamIntro = () => {
  const [activeTeam, setActiveTeam] = useState('tech');

  return (
    <TeamIntroContainer>
      <Typography variant='h1'>Our dynamic team structure</Typography>
      <TeamIntroSectionWrapper>
        <TeamTitlesSection>
          <TeamButton
            onClick={() => setActiveTeam('tech')}
            isSelected={activeTeam === 'tech'}
          >
            Technical
          </TeamButton>
          <TeamButton
            onClick={() => setActiveTeam('android')}
            isSelected={activeTeam === 'android'}
          >
            Machine Learning & Android
          </TeamButton>
          <TeamButton
            onClick={() => setActiveTeam('design')}
            isSelected={activeTeam === 'design'}
          >
            Design
          </TeamButton>
          <TeamButton
            onClick={() => setActiveTeam('content')}
            isSelected={activeTeam === 'content'}
          >
            Content
          </TeamButton>
          <TeamButton
            onClick={() => setActiveTeam('community')}
            isSelected={activeTeam === 'community'}
          >
            Community Management
          </TeamButton>
        </TeamTitlesSection>
        <TeamDescriptionSection>
          {activeTeam === 'tech' && <Terminal />}
        </TeamDescriptionSection>
      </TeamIntroSectionWrapper>
    </TeamIntroContainer>
  );
};

export default TeamIntro;
