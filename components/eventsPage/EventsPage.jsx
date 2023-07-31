import Image from "next/image.js";
import {
	EventContent,
	EventInfo,
	EventTags,
	EventsCard,
	EventsContainer,
	EventsPageContainer,
	FilterCard,
	FilterContainer,
	ImageContainer,
	LeftContainer,
	RightContainer
} from "./EventsPage.styled";
import useSWR from "swr";
import Typography from "../display/typography/Typography.jsx";
import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";

const filters = [
	"All",
	"Web",
	"Flutter",
	"TailwindCSS",
	"Kotlin",
	"Tensorflow",
	"Git"
];

function EventsPage() {
	async function fetcher(url) {
		return axios.get(url).then((res) => res.data);
	}
	const {
		data: eventsData,
		error,
		isLoading
	} = useSWR(`/api/events`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	});

	const theme = useTheme();
	const [isActive, setIsActive] = useState("All");

	const arrowMotion = {
		initial: { x: 0 },
		hover: { x: 5 }
	};

	const coverImageMotion = {
		initial: { scale: 1 },
		hover: { scale: 1.05, transition: { duration: 0.2 } }
	};

	const filterElements = filters.map((filter, index) => (
		<FilterCard
			key={index}
			onClick={() => setIsActive(filter)}
			initial="initial"
			animate="initial"
			whileHover="hover"
		>
			<Typography
				variant="bodyEmphasized"
				color={
					isActive === filter ? theme?.colors.brandBlue : "inherit"
				}
			>
				{filter}
			</Typography>
			<motion.span variants={arrowMotion}>
				<Typography
					variant="h5"
					color={
						isActive === filter
							? theme?.colors.brandBlue
							: "inherit"
					}
				>
					&rarr;
				</Typography>
			</motion.span>
		</FilterCard>
	));

	const eventsCardElements =
		eventsData &&
		eventsData.map((event, index) => {
			const eventTagsElements = event.tags.map((tag, index) => (
				<Typography variant="body" subdued key={index}>
					{tag.label}
					&nbsp;{index < event.tags.length - 1 && " | "}&nbsp;
				</Typography>
			));
			return (
				<EventsCard
					key={index}
					initial="initial"
					animate="initial"
					whileHover="hover"
				>
					<ImageContainer variants={coverImageMotion}>
						<Image
							src={
								"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_540,q_auto:good,w_720/v1/gcs/platform-data-dsc/event_wrapup/DSC_0027_kDjlj78.JPG"
							}
							alt={"EventsCard1"}
							fill="responsive"
							style={{
								borderRadius: "inherit",
								objectFit: "cover"
							}}
						/>
					</ImageContainer>
					<EventInfo>
						<EventTags>{eventTagsElements}</EventTags>
						<Typography variant="h3">{event.title}</Typography>
						<Typography variant="body">
							{moment(event.date.start).format("MMM D, YYYY")} -{" "}
							{event.shortDescription}
						</Typography>
					</EventInfo>
				</EventsCard>
			);
		});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) return <div>Error: {error.message}</div>;

	return (
		<>
			{eventsData && (
				<EventsPageContainer>
					<Typography variant="h1">{isActive} Events</Typography>
					<EventsContainer>
						<LeftContainer>{eventsCardElements}</LeftContainer>
						<RightContainer>
							<Typography variant="h2">Tags</Typography>
							<FilterContainer>{filterElements}</FilterContainer>
						</RightContainer>
					</EventsContainer>
				</EventsPageContainer>
			)}
		</>
	);
}

export default EventsPage;
