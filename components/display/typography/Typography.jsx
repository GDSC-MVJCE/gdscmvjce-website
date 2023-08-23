import React from "react";
import { TypographyWrapper } from "./Typography.styled";

function Typography({
  variant = "body",
  children,
  color,
  subdued,
  className,
  ref,
  style
}) {
  return (
    <TypographyWrapper
      variant={variant}
      color={color}
      subdued={subdued}
      className={className}
      style={style}
      ref={ref}
    >
      {children}
    </TypographyWrapper>
  );
}

export default Typography;
