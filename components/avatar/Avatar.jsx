import { FC } from "react";
import { AvatarWrapper } from "./Avatar.styled";

const Avatar = ({
	size = "sm",
	url,
	blur = true,
	borderWidth,
	borderColor,
	className
}) => {
	return (
		<AvatarWrapper
			size={size}
			url={url}
			blur={blur}
			className={className}
			borderWidth={borderWidth}
			borderColor={borderColor}
		/>
	);
};

export default Avatar;
