import { useTheme } from "styled-components";
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
} from "./FaqSection.styled";
import Typography from "../typography/Typography";
import {
	generalFAQ,
	registrationFAQ,
	applicationFAQ,
	communityFAQ,
	newsletterFAQ
} from "@/constants/faqData";
import { useInView } from "react-intersection-observer";

function FaqSection() {
	const theme = useTheme();

	const { ref: ref0, inView: inView0 } = useInView({ threshold: 0.4 });
	const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.4 });
	const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.4 });
	const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.4 });
	const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.4 });

	const buttonData = [
		{
			label: "General",
			bgColor: theme.colors.brandBlue,
			faqData: generalFAQ
		},
		{
			label: "Registration",
			bgColor: theme.colors.brandRed,
			faqData: registrationFAQ
		},
		{
			label: "Application",
			bgColor: theme.colors.brandGreen,
			faqData: applicationFAQ
		},
		{
			label: "Community",
			bgColor: theme.colors.brandYellow,
			faqData: communityFAQ
		},
		{
			label: "Newsletter",
			bgColor: theme.colors.bgTertiary,
			faqData: newsletterFAQ
		}
	];

	const buttonElements = buttonData.map((button, index) => (
		<a href={`/#faq-card${index}`} key={index}>
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
		return (
			<Card
				key={index}
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
					{card.faqData.map((ques, index) => (
						<CardFaq key={index}>
							<Typography variant="h5">
								{ques.question}
							</Typography>
							<Typography variant="body">
								{ques.answer}
							</Typography>
							{index !== card.faqData.length - 1 && <Hr />}
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
				<OptionContainer>{buttonElements}</OptionContainer>
			</LeftContainer>
			<RightContainer>{cardContents}</RightContainer>
		</Container>
	);
}

export default FaqSection;
