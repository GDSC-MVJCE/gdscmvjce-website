import Typography from "../Typography";
import { FloatingLabelWrapper } from "./FloatingLabel.styled";

function FloatingLabel({
  variant = "body",
  children,
  color,
  subdued,
  className,
  ref,
  top,
  left,
  delay,
  opacity,
}) {
  return (
    <FloatingLabelWrapper top={top} left={left} delay={delay} opacity={opacity}>
      <Typography
        variant={variant}
        color={color}
        subdued={subdued}
        className={className}
        ref={ref}
      >
        {children}
      </Typography>
    </FloatingLabelWrapper>
  );
}

export default FloatingLabel;
