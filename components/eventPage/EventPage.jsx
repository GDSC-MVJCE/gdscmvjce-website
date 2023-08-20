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

function EventPage({ eventData }) {
  const scheduleElements =
    eventData.schedule != undefined &&
    eventData.schedule.map((schedule, index) => (
      <ScheduleCardColorWrapper key={index}>
        <ScheduleCard>
          <ScheduleDate>
            <Typography variant="bodySmall" subdued>
              {moment(schedule.time.start).format("LT")} -{" "}
              {moment(schedule.time.start).format("LT")}
            </Typography>
            <Typography variant="bodySmall" subdued>
              {moment(schedule.sessionDate).format(" Do MMM YYYY")}
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
            <Avatar url={speaker.image} size="lg" />
            <SpeakerName>
              <Typography variant="h4">{speaker.name}</Typography>
              <Typography variant="bodySmall">{speaker.title}</Typography>
            </SpeakerName>
          </SpeakerInfo>
          <SpeakerRole>
            <Typography variant="body">{parse(speaker.description)}</Typography>
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
                <Typography variant="h1">{eventData.title}</Typography>
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
                    {(eventData.startDate &&
                      moment(eventData.startDate).format("Do") +
                        " - " +
                        moment(eventData.endDate).format("Do MMM YYYY")) ||
                      moment(eventData.startDate).format("Do MMM YYYY")}
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
                    {eventData.status.toUpperCase()}
                  </Typography>
                </InfoModalRegistration>
                <Link
                  href={eventData.registrationLink ?? "#"}
                  style={{
                    textDecoration: "none"
                  }}
                >
                  <Button>
                    {eventData.status === "ended"
                      ? `Registration ended`
                      : `Register Now`}
                  </Button>
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
