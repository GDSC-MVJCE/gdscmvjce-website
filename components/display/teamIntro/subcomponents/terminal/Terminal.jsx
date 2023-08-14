import React, { useState } from 'react';
import {
  TerminalButton,
  TerminalContainer,
  TerminalContent,
  TerminalHeader,
} from './Terminal.styled';
import { TypingEffect } from '@/components/display/typography/typingEffect/TypingEffect';
import { Azeret_Mono } from 'next/font/google';

const azeret = Azeret_Mono({
  weight: '400',
  subsets: ['latin'],
});

const Terminal = () => {
  const [isGDSCTextTyped, setIsGDSCTextTyped] = useState(false);
  return (
    <TerminalContainer>
      <TerminalHeader>
        <TerminalButton color='#FF5656' />
        <TerminalButton color='#FFCA2E' />
        <TerminalButton color='#24B06C' />
      </TerminalHeader>
      <TerminalContent className={azeret.className}>
        <TypingEffect
          className='gdsc-text'
          showCursor={true}
          onTypingComplete={() => {
            setIsGDSCTextTyped(true);
          }}
          interKeyStrokeDurationInMs={100}
        >{`$gdsc cd /tech`}</TypingEffect>
        {isGDSCTextTyped && (
          <TypingEffect interKeyStrokeDurationInMs={40} showCursor={true}>
            {`>> The GDSC Tech Team is a powerhouse of web development expertise, specializing in the latest technologies like Firebase and beyond.`}
          </TypingEffect>
        )}
      </TerminalContent>
    </TerminalContainer>
  );
};

export default Terminal;
