import React from "react";
import DesignIllustration from "@public/images/design-team.svg";
import { MobileDesignSectionContainer } from "./MobileDesignSection.styled";
import { TypingEffect } from "@/components/display/typography/typingEffect/TypingEffect";
import Typography from "@/components/display/typography/Typography";
const MobileDesignSection = () => {
  return (
    <MobileDesignSectionContainer>
      <DesignIllustration className="illustration" />
      <Typography variant="body">
        <TypingEffect
          interKeyStrokeDurationInMs={20}
        >{`The Design Team at GDSC MVJCE is the driving force behind our visual appeal.
      They craft compelling event posters and captivating graphics.`}</TypingEffect>
      </Typography>
    </MobileDesignSectionContainer>
  );
};

export default MobileDesignSection;
