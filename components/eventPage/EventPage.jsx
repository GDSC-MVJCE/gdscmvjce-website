import useSWR from "swr";
import parse from "html-react-parser";

import { useRouter } from "next/router";
import {
	Banner,
	ContentContainer,
	EventContainer,
	EventInfo,
	EventWrapper,
	InfoModal,
	InfoModalDate,
	InfoModalVenue,
	InfoModalRegistration,
	Left,
	Right,
	ScheduleCard,
	ScheduleCardsContainer,
	ScheduleContainer,
	ScheduleDate,
	SpeakerCard,
	SpeakerInfo,
	SpeakerName,
	SpeakerRole,
	SpeakersCardContainer,
	SpeakersContainer,
	Button,
	ScheduleCardColorWrapper
} from "./EventPage.styled";
import Typography from "../display/typography/Typography";
import Avatar from "../avatar/Avatar";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

// export async function getStaticProps(context) {
// 	const { params } = context;
// 	const res = await fetch(`/api/events/${params.eventId}`);
// 	const eventData = await res.json();

// 	return {
// 		props: {
// 			eventData
// 		},
// 		revalidate: 10
// 	};
// }

function EventPage() {
	const router = useRouter();
	const query = router.query;

	//TEMPORARY API CALL
	async function fetcher(url) {
		return fetch(url).then((res) => res.json());
	}
	const {
		data: eventData,
		error,
		isLoading
	} = useSWR(`/api/events/${query.eventId}`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	});
	/////////////////////

	const scheduleElements =
		eventData &&
		eventData.schedule.map((schedule, index) => (
			<ScheduleCardColorWrapper key={index}>
				<ScheduleCard>
					<ScheduleDate>
						<Typography variant="bodySmall" subdued>
							{moment(schedule.time.start).format("LT")} -{" "}
							{moment(schedule.time.start).format("LT")}
						</Typography>
						<Typography variant="bodySmall" subdued>
							{moment(schedule.sessionDate).format(
								" Do MMM YYYY"
							)}
						</Typography>
					</ScheduleDate>
					<Typography variant="body">
						{schedule.sessionName}
					</Typography>
				</ScheduleCard>
			</ScheduleCardColorWrapper>
		));

	const speakerElements =
		eventData &&
		eventData.speakers.map((speaker) => (
			<Link
				href={speaker.profileLink}
				key={speaker.id}
				style={{ textDecoration: "none" }}
			>
				<SpeakerCard>
					<SpeakerInfo>
						<Avatar url={speaker.image} size="lg" />
						<SpeakerName>
							<Typography variant="h4">{speaker.name}</Typography>
							<Typography variant="bodySmall">
								{speaker.title}
							</Typography>
						</SpeakerName>
					</SpeakerInfo>
					<SpeakerRole>
						<Typography variant="body">
							{parse(speaker.description)}
						</Typography>
					</SpeakerRole>
				</SpeakerCard>
			</Link>
		));

	return (
		<>
			{(isLoading && <div>Loading...</div>) ||
				(error && <div>Failed to load</div>) ||
				(eventData && (
					<EventContainer>
						<Banner>
							<Image
								src={eventData.bannerImg}
								alt="bannerImg"
								width={1300}
								height={400}
								style={{
									objectFit: "cover",
									borderRadius: "inherit"
								}}
							/>
						</Banner>
						<EventWrapper>
							<Left>
								<ContentContainer>
									<Typography variant="h1">
										{eventData.title}
									</Typography>
									<EventInfo>
										{eventData.description}
									</EventInfo>
								</ContentContainer>
								<ScheduleContainer>
									<Typography variant="h2">
										Event Schedule
									</Typography>
									<ScheduleCardsContainer>
										{scheduleElements}
									</ScheduleCardsContainer>
								</ScheduleContainer>
								<SpeakersContainer>
									<Typography variant="h2">
										Speakers
									</Typography>
									<SpeakersCardContainer>
										{speakerElements}
									</SpeakersCardContainer>
								</SpeakersContainer>
							</Left>
							<Right>
								<InfoModal>
									<InfoModalDate>
										<Typography variant="body" subdued>
											Mark your calendars for
										</Typography>
										<Typography variant="h4">
											{(eventData.date.end &&
												moment(
													eventData.date.start
												).format("Do") +
													" - " +
													moment(
														eventData.date.end
													).format("Do MMM YYYY")) ||
												moment(
													eventData.date.start
												).format("Do MMM YYYY")}
										</Typography>
									</InfoModalDate>
									<InfoModalVenue>
										<Typography variant="body" subdued>
											Venue
										</Typography>
										<Typography variant="h4">
											{eventData.venue}
										</Typography>
									</InfoModalVenue>
									<InfoModalRegistration>
										<Typography variant="body" subdued>
											Registration
										</Typography>
										<Typography variant="h4">
											{eventData.status}
										</Typography>
									</InfoModalRegistration>
									<Link
										href={eventData.registrationLink}
										style={{
											textDecoration: "none"
										}}
									>
										<Button>Register Now</Button>
									</Link>
								</InfoModal>
							</Right>
						</EventWrapper>
					</EventContainer>
				))}
		</>
	);
}

export default EventPage;
