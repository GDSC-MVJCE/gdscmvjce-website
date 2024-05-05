import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "styled-components";
import useSWR from "swr";

import {
  Button,
  Container,
  DateLine,
  EventCard,
  EventCardContainer,
  TopContainer,
  ExploreButton,
  ImageContainer,
  TitleContainer
} from "./EventsSection.styled";
import Typography from "../typography/Typography";
import fetcher from "@/utils/fetcher";
import { swrConfig } from "@/constants/swrConfig";
import SpinnerLoader from "@/components/loaders/spinnerLoader/SpinnerLoader";
import truncateText from "@/utils/truncate";
import capitalize from "@/utils/capitalize";
import isoToDate from "@/utils/isoToDate";

function EventsSection({ isMobile }) {
  const theme = useTheme();
  const limit = 140;

  const [eventsData, setEventsData] = useState([]);

  const { data, isLoading } = useSWR(`/api/events?page=1`, fetcher, swrConfig);

  useEffect(() => {
    if (data) {
      setEventsData(data);
    }
  }, [data]);

  isLoading && <SpinnerLoader />;

  const cardsElement = eventsData.map((event) => (
    <EventCard key={event.id}>
      <TopContainer>
        <ImageContainer>
          <Image
            src={event.thumbnail ?? "/images/gdsc_fallback.png"}
            fill="responsive"
            alt={event.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
            style={{
              borderRadius: "8px",
              objectFit: "cover"
            }}
          />
        </ImageContainer>
        <DateLine>
          <Typography variant="bodySmall">
            {isoToDate(event.startDate)}
          </Typography>
          {event.status === "upcoming" || event.status === "open" ? (
            <Typography variant="bodySmall" color={theme?.colors.brandGreen}>
              {capitalize(event.status)}
            </Typography>
          ) : event.status === "ongoing" ? (
            <Typography variant="bodySmall" color={theme?.colors.brandBlue}>
              {capitalize(event.status)}
            </Typography>
          ) : (
            ""
          )}
        </DateLine>
        <Typography variant="h4">{event.title}</Typography>
        <Typography variant="bodySmall">
          {truncateText(event.shortDescription, limit)}
        </Typography>
      </TopContainer>
      <Link href={`/events/${event.slug}`} style={{ textDecoration: "none" }}>
        <Button>
          {event.status === "ended" ? "Learn More" : "Register Now"}
        </Button>
      </Link>
    </EventCard>
  ));

  return (
    <Container>
      <TitleContainer>
        <Typography variant="h1">Our Events</Typography>
        {!isMobile && (
          <Link href={`/events`} style={{ textDecoration: "none" }}>
            <ExploreButton>Explore more events</ExploreButton>
          </Link>
        )}
      </TitleContainer>
      <EventCardContainer>{cardsElement}</EventCardContainer>
      {isMobile && (
        <Link href={`/events`} style={{ textDecoration: "none" }}>
          <ExploreButton>Explore more events</ExploreButton>
        </Link>
      )}
    </Container>
  );
}

export default EventsSection;
