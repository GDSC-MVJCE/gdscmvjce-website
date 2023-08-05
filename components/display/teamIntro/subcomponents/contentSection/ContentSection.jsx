import React from 'react';
import GoogleDocsWindow from '@public/images/googledocs_window.svg';
import { ContentSectionContainer } from './ContentSection.styled';
import { TypingEffect } from '@/components/display/typography/typingEffect/TypingEffect';
const ContentSection = () => {
  return (
    <ContentSectionContainer>
      <GoogleDocsWindow />
      <div className='docs-text'>
        <TypingEffect interKeyStrokeDurationInMs={20} showCursor={true}>
          The Content Team at GDSC MVJCE is the storytelling heart of our
          community. They curate captivating blogs, craft insightful articles,
          and orchestrate engaging newsletters. With a passion for sharing
          knowledge and fostering connections, this team weaves words into
          meaningful narratives that keep our members informed and inspired.
        </TypingEffect>
      </div>
    </ContentSectionContainer>
  );
};

export default ContentSection;
