import styled from "styled-components";

export const EventContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 1em 5em;
	display: flex;
	flex-direction: column;
	gap: 3em;
`;

export const Banner = styled.div`
	width: 100%;
	height: 400px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
`;

export const EventWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 3em;
	display: flex;
`;

export const Left = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	gap: 3.5em;
`;

export const Right = styled.div`
	width: 40%;
	display: flex;
	justify-content: right;
`;

export const EventInfo = styled.div`
	margin-top: 1.4em;
`;

export const ContentContainer = styled.div``;

export const ScheduleContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

export const ScheduleCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.bgTertiary};
	gap: 0.4em;
	padding: 1em 1em;
	background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const ScheduleCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

export const ScheduleDate = styled.div`
	display: flex;
	gap: 1em;
`;

export const ScheduleCardColorWrapper = styled.div`
	width: 100%;
	padding-bottom: 0.3em;
	border-radius: 10px;
	background: ${({ theme }) =>
		`linear-gradient(90deg, ${theme.colors.brandRed}, ${theme.colors.brandYellow}, ${theme.colors.brandGreen}, ${theme.colors.brandBlue})`};
	background-size: 350% 350%;
	animation: Gradient 5s ease-in-out infinite;
	-webkit-animation: Gradient 5s ease-in-out infinite;
	-moz-animation: Gradient 5s ease-in-out infinite;

	&:hover {
		animation-duration: 3s;
		-webkit-animation-duration: 3s;
		-moz-animation-duration: 3s;
	}

	@keyframes Gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@-webkit-keyframes Gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@-moz-keyframes Gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

export const SpeakersContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

export const SpeakersCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5em;
`;

export const SpeakerCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.bgTertiary};
	padding: 1em 1em;
	gap: 1em;
	cursor: pointer;

	&:hover {
		transition: all 0.2s ease-in-out;
		translate: 2px -2px;
	}
`;

export const SpeakerInfo = styled.div`
	display: flex;
	gap: 1em;
`;

export const SpeakerRole = styled.div``;

export const SpeakerName = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1em;
`;

export const InfoModal = styled.div`
	width: 80%;
	height: fit-content;
	min-height: 400px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.bgTertiary};
	display: flex;
	flex-direction: column;
	gap: 1em;
	box-shadow: 0px 4px 44px -2px rgba(0, 0, 0, 0.16);
	padding: 3em;
	position: sticky;
	top: 40px;
`;

export const InfoModalDate = styled.div`
	display: flex;
	flex-direction: column;
`;

export const InfoModalVenue = styled.div`
	display: flex;
	flex-direction: column;
`;

export const InfoModalRegistration = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Button = styled.button`
	width: 100%;
	padding: 0.7em 1.5em;
	font-weight: 500;
	font-size: 1.5rem;
	color: white;
	background-color: ${({ theme }) => theme.colors.brandBlue};
	border-width: 4px;
	border-style: solid;
	border-radius: 10px;
	letter-spacing: 1px;
	cursor: pointer;

	&:hover {
		transition: all 0.2s ease-in-out;
		translate: 2px -2px;
	}
`;
