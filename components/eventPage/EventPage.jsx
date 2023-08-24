import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import dayjs from "dayjs";
import useSWR from "swr";
import parse from "html-react-parser";

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
  ScheduleCardColorWrapper,
  EventTagsContainer,
  EventTag
} from "./EventPage.styled";
import Typography from "../display/typography/Typography";
import Avatar from "../avatar/Avatar";
import truncateText from "@/utils/truncate";
import capitalize from "@/utils/capitalize";

function EventPage({ eventData }) {
  const limit = 400;

  const scheduleElements =
    eventData.schedule != undefined &&
    eventData.schedule.map((schedule, index) => (
      <ScheduleCardColorWrapper key={index}>
        <ScheduleCard>
          <ScheduleDate>
            <Typography variant="bodySmall" subdued>
              {dayjs(schedule.time.start).format("LT")} -{" "}
              {dayjs(schedule.time.start).format("LT")}
            </Typography>
            <Typography variant="bodySmall" subdued>
              {dayjs(schedule.sessionDate).format("D MMM YYYY")}
            </Typography>
          </ScheduleDate>
          <Typography variant="body">{schedule.sessionName}</Typography>
        </ScheduleCard>
      </ScheduleCardColorWrapper>
    ));

  const speakerElements =
    eventData.speakers != undefined &&
    eventData.speakers.length > 0 &&
    eventData.speakers.map((speaker) => (
      <Link
        href={speaker.profileLink}
        key={speaker.id}
        style={{ textDecoration: "none" }}
      >
        <SpeakerCard>
          <SpeakerInfo>
            <Avatar url={speaker.image} size="lg" borderWidth={"0"} />
            <SpeakerName>
              <Typography variant="h4">{speaker.name}</Typography>
              <Typography variant="bodySmall">{speaker.title}</Typography>
            </SpeakerName>
          </SpeakerInfo>
          <SpeakerRole>
            <Typography variant="body">
              {truncateText(parse(speaker.description), limit)}
            </Typography>
          </SpeakerRole>
        </SpeakerCard>
      </Link>
    ));

  return (
    <>
      {eventData && (
        <EventContainer>
          <Banner>
            <Image
              src={
                eventData.coverPhoto ?? "/images/events/gdsc-event-fallback.png"
              }
              alt="bannerImg"
              fill="responsive"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
              style={{
                objectFit: "cover",
                borderRadius: "inherit"
              }}
            />
          </Banner>
          <EventWrapper>
            <Left>
              <ContentContainer>
                <Typography variant="displayLarge">
                  {eventData.title}
                </Typography>
                <EventInfo>
                  <Typography variant="body">
                    {eventData.description}
                  </Typography>
                </EventInfo>
              </ContentContainer>
              {eventData.schedule != undefined && (
                <ScheduleContainer>
                  <Typography variant="h2">Event Schedule</Typography>

                  <ScheduleCardsContainer>
                    {scheduleElements}
                  </ScheduleCardsContainer>
                </ScheduleContainer>
              )}
              <EventTagsContainer>
                {eventData.tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/events?type=${tag.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <EventTag>
                      <Typography variant="body">{tag.label}</Typography>
                    </EventTag>
                  </Link>
                ))}
              </EventTagsContainer>
              {eventData.speakers != undefined &&
                eventData.speakers.length > 0 && (
                  <SpeakersContainer>
                    <Typography variant="h2">Speakers</Typography>
                    <SpeakersCardContainer>
                      {speakerElements}
                    </SpeakersCardContainer>
                  </SpeakersContainer>
                )}
            </Left>
            <Right>
              <InfoModal>
                <InfoModalDate>
                  <Typography variant="body" subdued>
                    Mark your calendars for
                  </Typography>
                  <Typography variant="h4">
                    {eventData.startDate &&
                    dayjs(eventData.startDate).format("D") !==
                      dayjs(eventData.endDate).format("D")
                      ? dayjs(eventData.startDate).format("D") +
                        " - " +
                        dayjs(eventData.endDate).format("D MMM YYYY")
                      : dayjs(eventData.startDate).format("D MMM YYYY")}
                  </Typography>
                </InfoModalDate>
                <InfoModalVenue>
                  <Typography variant="body" subdued>
                    Venue
                  </Typography>
                  <Typography variant="h4">{eventData.venue}</Typography>
                </InfoModalVenue>
                <InfoModalRegistration>
                  <Typography variant="body" subdued>
                    Registration
                  </Typography>
                  <Typography variant="h4">
                    {capitalize(eventData.status)}
                  </Typography>
                </InfoModalRegistration>
                <Link
                  href={eventData.registrationLink ?? "#"}
                  style={{
                    textDecoration: "none"
                  }}
                >
                  {eventData.status !== "ended" && (
                    <Button>Register Now</Button>
                  )}
                </Link>
              </InfoModal>
            </Right>
          </EventWrapper>
        </EventContainer>
      )}
    </>
  );
}

export default EventPage;
