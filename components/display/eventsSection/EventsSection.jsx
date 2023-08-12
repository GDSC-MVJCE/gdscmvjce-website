import Image from "next/image";
import Typography from "../typography/Typography";
import {
	Button,
	Container,
	DateLine,
	EventCard,
	EventCardContainer,
	Top,
	ExploreButton
} from "./EventsSection.styled";
import { useTheme } from "styled-components";
import Tilt from "react-parallax-tilt";

const events = [
	{
		image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_540,q_auto:good,w_720/v1/gcs/platform-data-dsc/event_wrapup/DSC_0027_kDjlj78.JPG",
		title: "Web Development Workshop - Next.js & four.js",
		date: "23 June 2023",
		shortDescription: "a shorter description for the event card",
		description:
			"Best event for four.js learn, fast , free certificate for you thank you please come for event ez attendance",
		isUpcoming: true
	},
	{
		image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_540,q_auto:good,w_720/v1/gcs/platform-data-dsc/event_wrapup/DSC_0027_kDjlj78.JPG",
		title: "Web Development Workshop - Next.js & four.js",
		date: "23 June 2023",
		shortDescription: "a shorter description for the event card",
		description:
			"Best event for four.js learn, fast , free certificate for you thank you please come for event ez attendance",
		isUpcoming: false
	},
	{
		image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_540,q_auto:good,w_720/v1/gcs/platform-data-dsc/event_wrapup/DSC_0027_kDjlj78.JPG",
		title: "Web Development Workshop - Next.js & four.js",
		date: "23 June 2023",
		shortDescription:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam illum deserunt est incidunt illo a, odio ex enim ducimus iure qui consequuntur autem dolore cupiditate, voluptate impedit neque tempore odit?",
		description:
			"Best event for four.js learn, fast , free certificate for you thank you please come for event ez attendance",
		isUpcoming: true
	}
];

function EventsSection() {
	const theme = useTheme();

	const cardsElement = events.map((event, index) => (
		<Tilt key={index}>
			<EventCard>
				<Top>
					<Image
						src={event.image}
						width={350}
						height={350}
						alt="Event poster"
						style={{
							borderRadius: "8px",
							display: "block",
							margin: "0 auto"
						}}
					/>
					<DateLine>
						<Typography variant="bodySmall">
							{event.date}
						</Typography>
						{event.isUpcoming && (
							<Typography
								variant="bodySmall"
								color={theme?.colors.brandGreen}
							>
								Upcoming
							</Typography>
						)}
					</DateLine>
					<Typography variant="h5">{event.title}</Typography>
					<br />
					<Typography variant="bodySmall">
						{event.shortDescription}
					</Typography>
				</Top>
				<Button>
					{event.isUpcoming ? "Register Now" : "Learn More"}
				</Button>
			</EventCard>
		</Tilt>
	));

	return (
		<Container>
			<Typography variant="h1">Our events</Typography>
			<EventCardContainer>{cardsElement}</EventCardContainer>
			<ExploreButton>Explore more events</ExploreButton>
		</Container>
	);
}

export default EventsSection;
