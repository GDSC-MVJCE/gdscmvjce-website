import React from 'react';

const CommunitySection = () => {
  return (
    <video
      width='100%'
      height='100%'
      autoPlay
      style={{
        borderRadius: '20px',
      }}
    >
      <source src='/images/chat_animation.webm' type='video/webm' />
    </video>
  );
};

export default CommunitySection;
