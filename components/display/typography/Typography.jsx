import React from 'react';
import { TypographyWrapper } from './Typography.styled';

function Typography({ variant = 'body', children, color, subdued, className }) {
  return (
    <TypographyWrapper
      variant={variant}
      color={color}
      subdued={subdued}
      className={className}
    >
      {children}
    </TypographyWrapper>
  );
}

export default Typography;
