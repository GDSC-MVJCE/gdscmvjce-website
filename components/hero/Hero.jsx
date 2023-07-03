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
  HeroAvatarWrapper,
  HeroBackgroundContainer,
  HeroBackgroundTextSpan,
  HeroSectionContainer,
  HeroTextSpan,
  LogoContainer,
} from './Hero.styled.js';
import GDSCLogo from '@logos/gdsc-logo.svg';
import Xarrow, { Xwrapper, useXarrow } from 'react-xarrows';
import Avatar from '../avatar/Avatar';

const Hero = () => {
  const heroTextElements = [
    // {
    //   text: 'Firebase',
    //   id: 'firebase',
    //   color: '#FBBC04',
    //   x: 70,
    //   y: 20,
    //   delay: 0.8,
    // },
    { text: 'Web', id: 'web', color: '#EA4335', x: 55, y: 20, delay: 0.1 },
    {
      text: 'Tensorflow',
      id: 'tensorflow',
      color: '#FBBC04',
      x: 38,
      y: 79,
      delay: 0.4,
    },
    {
      text: 'Kotlin',
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

  const heroAvatarElements = [
    {
      url: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/aishwarya_b_s_zF7dQoq.jpg',
      id: 'a1',
      x: 35,
      y: 20,
      delay: 0.9,
    },
    {
      url: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/pooja_sriram_DCYbFrK.jpeg',
      id: 'a2',
      x: 60,
      y: 65,
      delay: 1.5,
    },
    {
      url: 'https://avatars.githubusercontent.com/u/102166167?v=4',
      id: 'a3',
      x: 18,
      y: 65,
      delay: 0.3,
    },
    {
      url: 'https://avatars.githubusercontent.com/u/102166167?v=4',
      id: 'a4',
      x: 74,
      y: 20,
      delay: 0.3,
    },
  ];

  const updateXarrow = useXarrow();
  const [isTextHighlighted, setIsTextHighlighted] = useState(false);
  const [isAvatarHighlighted, setIsAvatarHighlighted] = useState(false);
  const refsById = useMemo(() => {
    const refs = {};
    heroTextElements.forEach((item) => {
      refs[item.id] = React.createRef(null);
    });
    heroAvatarElements.forEach((item) => {
      refs[item.id] = React.createRef(null);
    });
    return refs;
  }, [heroAvatarElements, heroTextElements]);

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
      <ScrollContainer snap='mandatory'>
        <ScrollPage>
          <Animator animation={batch(Fade(0, 1), Sticky(), Zoom(8, 1))}>
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
                <HeroTextSpan
                  color='#4285F4'
                  onMouseEnter={() => setIsAvatarHighlighted(true)}
                  onMouseLeave={() => setIsAvatarHighlighted(false)}
                >
                  Connect.
                </HeroTextSpan>
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
                {heroAvatarElements.map((element, index) => (
                  <HeroAvatarWrapper
                    isHighlighted={isAvatarHighlighted}
                    top={element.y}
                    left={element.x}
                    key={index}
                    id={element.id}
                    ref={refsById[element.id]}
                    delay={element.delay}
                  >
                    <Avatar size='md' url={element.url} borderColor='#4285F4' />
                  </HeroAvatarWrapper>
                ))}
                <Xarrow
                  start={refsById['a1']}
                  end={refsById['a2']}
                  showHead={false}
                  showTail={false}
                  startAnchor={'middle'}
                  endAnchor={'middle'}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  strokeWidth={2}
                  zIndex={-2}
                  headColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  tailColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  lineColor={isAvatarHighlighted ? '#4285F4' : '#F1F1F1'}
                />
                <Xarrow
                  start={refsById['a2']}
                  end={refsById['a4']}
                  showHead={false}
                  showTail={false}
                  startAnchor={'middle'}
                  endAnchor={'middle'}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  strokeWidth={2}
                  zIndex={-2}
                  headColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  tailColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  lineColor={isAvatarHighlighted ? '#4285F4' : '#F1F1F1'}
                />
                {/* <Xarrow
                  start={refsById['a2']}
                  end={refsById['a3']}
                  showHead={false}
                  showTail={false}
                  startAnchor={'middle'}
                  endAnchor={'middle'}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  strokeWidth={2}
                  zIndex={-2}
                  headColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  tailColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  lineColor={isAvatarHighlighted ? '#4285F4' : '#F1F1F1'}
                /> */}
                <Xarrow
                  start={refsById['a1']}
                  end={refsById['a3']}
                  showHead={false}
                  showTail={false}
                  startAnchor={'middle'}
                  endAnchor={'middle'}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  strokeWidth={2}
                  zIndex={-2}
                  headColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  tailColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  lineColor={isAvatarHighlighted ? '#4285F4' : '#F1F1F1'}
                />
                {/* <Xarrow
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
                  zIndex={-2}
                  color='#F1F1F1'
                /> */}
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
                  zIndex={-2}
                  strokeWidth={2}
                  headColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  tailColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  lineColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                />
                {/* <Xarrow
                  start='flutter'
                  end='tensorflow'
                  showHead={true}
                  showTail={true}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  zIndex={-2}
                  strokeWidth={2}
                  headColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  tailColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  lineColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                /> */}
                {/* <Xarrow
                  start='flutter'
                  end='android'
                  showHead={true}
                  showTail={true}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  zIndex={-2}
                  strokeWidth={2}
                  headColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  tailColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  lineColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                /> */}
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
                  zIndex={-2}
                  strokeWidth={2}
                  headColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  tailColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  lineColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                />
                {/* <Xarrow
                  start='tensorflow'
                  end='firebase'
                  showHead={true}
                  showTail={true}
                  headShape={'circle'}
                  tailShape={'circle'}
                  tailSize={3}
                  headSize={3}
                  curveness={0}
                  zIndex={-2}
                  strokeWidth={2}
                  lineColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                /> */}
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
                  zIndex={-2}
                  strokeWidth={2}
                  headColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  tailColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
                  lineColor={isTextHighlighted ? '#EA4335' : '#F1F1F1'}
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
