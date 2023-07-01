import React, { useEffect, useRef, useState } from 'react';
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
  HeroBackgroundContainer,
  HeroBackgroundTextSpan,
  HeroSectionContainer,
  HeroTextSpan,
  LogoContainer,
} from './Hero.styled.js';
import GDSCLogo from '@logos/gdsc-logo.svg';

const Hero = () => {
  const heroTextElements = [
    { text: 'Firebase', color: '#EA4335', x: 70, y: 20 },
    { text: 'Web', color: '#4285F4', x: 49, y: 20 },
    { text: 'Tensorflow', color: '#0F9D58', x: 30, y: 70 },
    { text: 'Android', color: '#0F9D58', x: 20, y: 20 },
    { text: 'Flutter', color: '#4285F4', x: 80, y: 80 },
  ];

  const [isTextHighlighted, setIsTextHighlighted] = useState(false);

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
          <Animator animation={batch(Fade(), Sticky(), MoveIn())}>
            <HeroBackgroundContainer>
              <div className='mainText'>
                <HeroTextSpan
                  color='#EA4335'
                  onMouseEnter={() => setIsTextHighlighted(true)}
                  onMouseLeave={() => setIsTextHighlighted(false)}
                >
                  Learn.
                </HeroTextSpan>
                <HeroTextSpan color='#4285F4'>Connect.</HeroTextSpan>
                <HeroTextSpan color='#0F9D58'>Grow.</HeroTextSpan>
              </div>
              {heroTextElements.map((element, index) => (
                <HeroBackgroundTextSpan
                  isHighlighted={isTextHighlighted}
                  top={element.y}
                  left={element.x}
                  key={index}
                  color={element.color}
                >
                  {element.text}
                </HeroBackgroundTextSpan>
              ))}
            </HeroBackgroundContainer>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </HeroSectionContainer>
  );
};

export default Hero;
