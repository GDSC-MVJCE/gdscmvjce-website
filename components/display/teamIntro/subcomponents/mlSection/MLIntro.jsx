import React, { useEffect } from 'react';
import {
  LogosWrapper,
  MLIntroContainer,
  PhoneContainer,
  ScreenContent,
} from './MLIntro.styled';

import PhoneImg from '@public/images/phone.svg';
import Typography from '@/components/display/typography/Typography';
import { TypingEffect } from '@/components/display/typography/typingEffect/TypingEffect';
import TensorFlowLogo from '../tensorflowlogo/TensorFlowLogo';

const MLIntro = () => {
  const [showTyping, setShowTyping] = React.useState(false);
  useEffect(() => {
    let timeout = setTimeout(() => setShowTyping(true), 1800);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <MLIntroContainer>
      <PhoneContainer>
        <PhoneImg />
        <ScreenContent>
          {/* <span className='time'>10:12</span>
          <Typography variant='bodySmall'> 5th August 2023 </Typography> */}
          <LogosWrapper>
            <TensorFlowLogo />
          </LogosWrapper>
          {showTyping && (
            <TypingEffect interKeyStrokeDurationInMs={20}>
              The Machine Learning and Android Team at GDSC MVJCE is a dynamic
              and versatile group of developers and data scientists,
              specializing in the powerful technologies of TensorFlow and
              Flutter.
            </TypingEffect>
          )}
        </ScreenContent>
      </PhoneContainer>
    </MLIntroContainer>
  );
};

export default MLIntro;
