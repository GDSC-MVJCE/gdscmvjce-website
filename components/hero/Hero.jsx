import React, { useEffect, useMemo, useRef, useState } from 'react';
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
import Xarrow, { Xwrapper, useXarrow } from 'react-xarrows';

const Hero = () => {
  const heroTextElements = [
    {
      text: 'Firebase',
      id: 'firebase',
      color: '#FBBC04',
      x: 70,
      y: 20,
      delay: 0.8,
    },
    { text: 'Web', id: 'web', color: '#EA4335', x: 49, y: 20, delay: 0.1 },
    {
      text: 'Tensorflow',
      id: 'tensorflow',
      color: '#FBBC04',
      x: 30,
      y: 70,
      delay: 0.4,
    },
    {
      text: 'Android',
      id: 'android',
      color: '#0F9D58',
      x: 20,
      y: 20,
      delay: 1.2,
    },
    {
      text: 'Flutter',
      id: 'flutter',
      color: '#4285F4',
      x: 80,
      y: 80,
      delay: 2.3,
    },
  ];

  const updateXarrow = useXarrow();
  const [isTextHighlighted, setIsTextHighlighted] = useState(false);
  const refsById = useMemo(() => {
    const refs = {};
    heroTextElements.forEach((item) => {
      refs[item.id] = React.createRef(null);
    });
    return refs;
  }, [heroTextElements]);

  useEffect(() => {
    updateXarrow();
  }, [refsById]);

  useEffect(() => {
    const handleResize = () => {
      updateXarrow();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
              <Xwrapper>
                {heroTextElements.map((element, index) => (
                  <HeroBackgroundTextSpan
                    isHighlighted={isTextHighlighted}
                    top={element.y}
                    left={element.x}
                    key={index}
                    color={element.color}
                    id={element.id}
                    ref={refsById[element.id]}
                    delay={element.delay}
                  >
                    {element.text}
                  </HeroBackgroundTextSpan>
                ))}
                {/* {heroAvatarElements.map((element, index) => (
                  <HeroBackgroundTextSpan
                    isHighlighted={isTextHighlighted}
                    top={element.y}
                    left={element.x}
                    key={index}
                    id={element.id}
                    ref={refsById[element.id]}
                    delay={element.delay}
                  >
                    <Avatar url={element.url} />
                  </HeroBackgroundTextSpan>
                ))} */}
                <Xarrow
                  start={refsById['firebase']}
                  end={refsById['web']}
                  showHead={true}
                  showTail={true}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  strokeWidth={2}
                  zIndex={-1}
                  color='#F1F1F1'
                />
                <Xarrow
                  start='flutter'
                  end='web'
                  showHead={true}
                  showTail={true}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  zIndex={-1}
                  strokeWidth={2}
                  color='#F1F1F1'
                />
                <Xarrow
                  start='flutter'
                  end='tensorflow'
                  showHead={true}
                  showTail={true}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  zIndex={-1}
                  strokeWidth={2}
                  color='#F1F1F1'
                />
                <Xarrow
                  start='flutter'
                  end='android'
                  showHead={true}
                  showTail={true}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  zIndex={-1}
                  strokeWidth={2}
                  color='#F1F1F1'
                />
                <Xarrow
                  start='tensorflow'
                  end='web'
                  showHead={true}
                  showTail={true}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  zIndex={-1}
                  strokeWidth={2}
                  color='#F1F1F1'
                />
                <Xarrow
                  start='tensorflow'
                  end='firebase'
                  showHead={true}
                  showTail={true}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  zIndex={-1}
                  strokeWidth={2}
                  color='#F1F1F1'
                />
                <Xarrow
                  start='tensorflow'
                  end='android'
                  showHead={true}
                  showTail={true}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  zIndex={-1}
                  strokeWidth={2}
                  color='#F1F1F1'
                />
              </Xwrapper>
            </HeroBackgroundContainer>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </HeroSectionContainer>
  );
};

export default Hero;
