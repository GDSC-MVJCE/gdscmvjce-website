import React from 'react';
import { MLIntroContainer, PhoneContainer } from './MLIntro.styled';

import PhoneImg from '@public/images/phone.svg';

const MLIntro = () => {
  return (
    <MLIntroContainer>
      <PhoneContainer>
        <PhoneImg />
      </PhoneContainer>
    </MLIntroContainer>
  );
};

export default MLIntro;
