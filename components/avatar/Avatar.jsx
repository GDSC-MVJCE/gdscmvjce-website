import { AvatarWrapper } from "./Avatar.styled";

const Avatar = ({
  size = "sm",
  url,
  blur = false,
  borderWidth,
  borderColor,
  className,
  ref,
}) => {
  return (
    <AvatarWrapper
      size={size}
      url={url}
      blur={blur}
      className={className}
      borderWidth={borderWidth}
      borderColor={borderColor}
      ref={ref}
    />
  );
};

export default Avatar;
