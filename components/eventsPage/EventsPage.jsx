import Image from "next/image.js";
import {
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
import moment from "moment";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import capitalize from "@/utils/capitalize";
import fetcher from "@/utils/fetcher";
import Link from "next/link";

const filters = [
	"all",
	"web",
	"flutter",
	"tailwindCSS",
	"kotlin",
	"tensorflow",
	"git"
];

function EventsPage() {
	const theme = useTheme();
	const router = useRouter();
	const { type } = router.query;
	const { pathname, query } = router;

	const [isActive, setIsActive] = useState(type ? type : "all");
	const [pageNumber, setPageNumber] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [eventsData, setEventsData] = useState([]);

	useEffect(() => {
		setIsActive(type ? type : "all");
	}, [type]);

	function handleFilterChange(filter) {
		if (filter === "all") {
			delete router.query.type;
			router.replace({ pathname, query }, undefined, { shallow: true });
		} else router.push(`/events?type=${filter}`);
	}

	const { data, error, isLoading } = useSWR(
		`/api/events?page=${pageNumber}`,
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false
		}
	);

	useEffect(() => {
		if (data) {
			setEventsData((prevData) => [...prevData, ...data]);
		}
		if (data && data.length < 3) {
			setHasMore(false);
		}
	}, [data]);

	const fetchMoreData = () => {
		// Temporarily setTimeout to simulate loading
		setTimeout(() => {
			setPageNumber((prevPageNumber) => prevPageNumber + 1);
		}, 2000);
	};

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
			onClick={() => handleFilterChange(filter)}
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
				{capitalize(filter)}
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

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) return <div>Error: {error.message}</div>;

	return (
		<>
			{eventsData && (
				<EventsPageContainer>
					<Typography variant="h1">
						{capitalize(isActive)} Events
					</Typography>
					<EventsContainer>
						<LeftContainer>
							<InfiniteScroll
								dataLength={eventsData.length}
								next={fetchMoreData}
								hasMore={hasMore}
								loader={<h4>Loading...</h4>}
								style={{ padding: "2rem" }}
							>
								{eventsData.map((event, index) => {
									const eventTagsElements = event.tags.map(
										(tag, index) => (
											<Typography
												variant="body"
												subdued
												key={index}
											>
												{tag.label}
												&nbsp;
												{index <
													event.tags.length - 1 &&
													" | "}
												&nbsp;
											</Typography>
										)
									);
									return (
										<Link
											href={
												pathname + "/" + event.eventId
											}
											key={index}
											style={{ textDecoration: "none" }}
										>
											<EventsCard
												initial="initial"
												animate="initial"
												whileHover="hover"
											>
												<ImageContainer
													variants={coverImageMotion}
												>
													<Image
														src={
															"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_540,q_auto:good,w_720/v1/gcs/platform-data-dsc/event_wrapup/DSC_0027_kDjlj78.JPG"
														}
														alt={"EventsCard1"}
														fill="responsive"
														style={{
															borderRadius:
																"inherit",
															objectFit: "cover"
														}}
													/>
												</ImageContainer>
												<EventInfo>
													<EventTags>
														{eventTagsElements}
													</EventTags>
													<Typography variant="h3">
														{event.title}
													</Typography>
													<Typography variant="body">
														{moment(
															event.date.start
														).format(
															"MMM D, YYYY"
														)}{" "}
														-{" "}
														{event.shortDescription}
													</Typography>
												</EventInfo>
											</EventsCard>
										</Link>
									);
								})}
							</InfiniteScroll>
						</LeftContainer>
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
