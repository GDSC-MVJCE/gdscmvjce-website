import Image from "next/image";
import { AvatarWrapper } from "./Avatar.styled";

const Avatar = ({
  size = "sm",
  url,
  blur = false,
  borderWidth,
  borderColor,
  className,
  ref,
  priority = false
}) => {
  return (
    <AvatarWrapper
      size={size}
      blur={blur}
      className={className}
      borderWidth={borderWidth}
      borderColor={borderColor}
      ref={ref}
    >
      <Image
        src={url ?? "/images/gdsc_fallback.png"}
        alt="Avatar"
        fill={true}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
      />
    </AvatarWrapper>
  );
};

export default Avatar;
