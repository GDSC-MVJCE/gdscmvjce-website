import { useTheme } from "styled-components";
import { SkChase, SkChaseDot, SpinnerContainer } from "./SpinnerLoader.styled";

function SpinnerLoader({ size = "30px" }) {
  const theme = useTheme();

  return (
    <SpinnerContainer>
      <SkChase size={size}>
        <SkChaseDot color={theme.colors.brandRed} />
        <SkChaseDot color={theme.colors.brandRed} />
        <SkChaseDot color={theme.colors.brandYellow} />
        <SkChaseDot color={theme.colors.brandYellow} />
        <SkChaseDot color={theme.colors.brandGreen} />
        <SkChaseDot color={theme.colors.brandGreen} />
        <SkChaseDot color={theme.colors.brandBlue} />
        <SkChaseDot color={theme.colors.brandBlue} />
      </SkChase>
    </SpinnerContainer>
  );
}

export default SpinnerLoader;
