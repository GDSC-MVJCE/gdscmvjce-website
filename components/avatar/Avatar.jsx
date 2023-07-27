import { FC } from 'react';
import { AvatarWrapper } from './Avatar.styled';

const Avatar = ({ size = 'sm', url, borderWidth, borderColor, className }) => {
  return (
    <AvatarWrapper
      size={size}
      url={url}
      className={className}
      borderWidth={borderWidth}
      borderColor={borderColor}

    />
  );
};

export default Avatar;
