import { forwardRef } from "react";
import Avatar from "../Avatar";
import { FloatingAvatarWrapper } from "./FloatingAvatar.styled";

const FloatingAvatar = forwardRef(function FloatingAvatar(
  {
    size = "sm",
    url,
    blur = false,
    borderWidth,
    borderColor,
    className,
    top,
    left,
    delay,
  },
  ref
) {
  return (
    <FloatingAvatarWrapper top={top} left={left} delay={delay} ref={ref}>
      <Avatar
        size={size}
        url={url}
        blur={blur}
        className={className}
        borderWidth={borderWidth}
        borderColor={borderColor}
      />
    </FloatingAvatarWrapper>
  );
});

export default FloatingAvatar;
