import React from 'react';
import Typography from '../display/typography/Typography';

import dynamic from 'next/dynamic';
const Animator = dynamic(
  import('react-scroll-motion').then((it) => it.Animator),
  { ssr: false }
);
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';
import {
  HeroSectionContainer,
  HeroTextContainer,
  HeroTextSpan,
  LogoContainer,
} from './Hero.styled.js';
import GDSCLogo from '@logos/gdsc-logo.svg';
const Hero = () => {
  return (
    <HeroSectionContainer>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), Zoom(8, 1))}>
            <LogoContainer>
              <GDSCLogo className='gdscLogo' />
            </LogoContainer>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -200))}>
            <HeroTextSpan color='#EA4335'>Learn.</HeroTextSpan>
            <HeroTextSpan color='#4285F4'>Connect.</HeroTextSpan>
            <HeroTextSpan color='#0F9D58'>Grow.</HeroTextSpan>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </HeroSectionContainer>
  );
};

export default Hero;
