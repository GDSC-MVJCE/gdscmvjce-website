import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useInView } from "react-intersection-observer";

import { faqData } from "@/constants/faqData";
import { devices } from "@/constants/theme";
import {
  Button,
  Card,
  CardContainer,
  CardFaq,
  CardTitleContainer,
  Container,
  Hr,
  LeftContainer,
  OptionContainer,
  RightContainer,
  Title
} from "./FaqPage.styled";
import Typography from "../display/typography/Typography";

function FaqPage() {
  const TOP_OFFSET = 77;

  const theme = useTheme();

  const [isMobile, setIsMobile] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const { ref: ref0, inView: inView0 } = useInView({
    threshold: isMobile ? 0.3 : 0.4
  });
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: isMobile ? 0.3 : 0.4
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: isMobile ? 0.3 : 0.4
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: isMobile ? 0.3 : 0.4
  });
  const { ref: ref4, inView: inView4 } = useInView({
    threshold: isMobile ? 0.3 : 0.4
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(devices.lg);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const buttonData = [
    {
      label: "General",
      bgColor: theme.colors.brandBlue
    },
    {
      label: "Registration",
      bgColor: theme.colors.brandRed
    },
    {
      label: "Application",
      bgColor: theme.colors.brandGreen
    },
    {
      label: "Community",
      bgColor: theme.colors.brandYellow
    },
    {
      label: "Newsletter",
      bgColor: theme.colors.bgTertiary
    }
  ];

  const buttonElements = buttonData.map((button, index) => (
    <a href={`#faq-card${index}`} key={index}>
      <Button
        bgcolor={button.bgColor}
        inView={
          index === 0
            ? inView0
            : index === 1
            ? inView1
            : index === 2
            ? inView2
            : index === 3
            ? inView3
            : index === 4
            ? inView4
            : null
        }
      >
        {button.label}
      </Button>
    </a>
  ));

  const cardContents = buttonData.map((card, index) => {
    const lowerCaseLabel = card.label.toLowerCase();
    return (
      <Card
        key={`faq-card${index}`}
        ref={
          index === 0
            ? ref0
            : index === 1
            ? ref1
            : index === 2
            ? ref2
            : index === 3
            ? ref3
            : index === 4
            ? ref4
            : null
        }
        id={`faq-card${index}`}
      >
        <CardTitleContainer bgcolor={card.bgColor}>
          <Typography variant="h1">{card.label}</Typography>
        </CardTitleContainer>
        <CardContainer>
          {faqData[lowerCaseLabel].map((data, index) => (
            <CardFaq key={index}>
              <Typography variant="h4">{data.question}</Typography>
              <Typography variant="body">{data.answer}</Typography>
              {index !== faqData[lowerCaseLabel].length - 1 && <Hr />}
            </CardFaq>
          ))}
        </CardContainer>
      </Card>
    );
  });

  return (
    <Container>
      <LeftContainer>
        <Title>FAQ</Title>
        {!isMobile && <OptionContainer>{buttonElements}</OptionContainer>}
      </LeftContainer>
      {isMobile && (
        <OptionContainer isVisible={showBackground}>
          {buttonElements}
        </OptionContainer>
      )}
      <RightContainer>{cardContents}</RightContainer>
    </Container>
  );
}

export default FaqPage;
