import Typography from "../typography/Typography";
import {
	Container,
	OfferCard,
	OfferInfo,
	OfferLogo,
	OffersContainer,
	Title
} from "./OfferSection.styled";
import BookSvg from "@icons/book1.svg";
import CubeSvg from "@icons/i3dcubescan.svg";
import MessageSvg from "@icons/messageprogramming.svg";
import PersonSvg from "@icons/profilecircle.svg";
import { useRef } from "react";
import Xarrow from "react-xarrows";
import { useTheme } from "styled-components";

function OfferSection() {
	const theme = useTheme();
	const Logo1ref = useRef();
	const Logo2ref = useRef();
	const Logo3ref = useRef();
	const Logo4ref = useRef();

	return (
		<Container>
			<Title>
				<Typography variant="h1">What do we offer?</Typography>
			</Title>
			<OffersContainer>
				<OfferCard>
					<OfferLogo bgcolor={theme?.colors.brandBlue} ref={Logo1ref}>
						<BookSvg />
					</OfferLogo>
					<OfferInfo>
						<Typography variant="h3">Study Jams</Typography>
						<Typography variant="bodySmall">
							Join our study jams to dive deep into specific
							topics, collaborate with fellow learners, and expand
							your understanding through guided study sessions and
							interactive discussions.
						</Typography>
					</OfferInfo>
				</OfferCard>
				<OfferCard
					style={{ alignSelf: "flex-end", justifyContent: "right" }}
				>
					<OfferLogo
						bgcolor={theme?.colors.brandGreen}
						ref={Logo2ref}
					>
						<CubeSvg />
					</OfferLogo>
					<OfferInfo>
						<Typography variant="h3">Workshops</Typography>
						<Typography variant="bodySmall">
							Immerse yourself in hands-on learning experiences
							with our workshops, where you&apos;ll gain practical
							knowledge and skills in the latest technologies and
							industry trends.
						</Typography>
					</OfferInfo>
				</OfferCard>
				<OfferCard>
					<OfferLogo bgcolor={theme?.colors.brandRed} ref={Logo3ref}>
						<MessageSvg />
					</OfferLogo>
					<OfferInfo>
						<Typography variant="h3">
							Engaging Dev Community
						</Typography>
						<Typography variant="bodySmall">
							Become part of our dynamic and supportive developer
							community, where you can connect with like-minded
							individuals, collaborate on projects, and find
							inspiration through engaging discussions and events.
						</Typography>
					</OfferInfo>
				</OfferCard>
				<OfferCard
					style={{ alignSelf: "flex-end", justifyContent: "right" }}
				>
					<OfferLogo
						bgcolor={theme?.colors.brandYellow}
						ref={Logo4ref}
					>
						<PersonSvg />
					</OfferLogo>
					<OfferInfo>
						<Typography variant="h3">
							Scale your dev career
						</Typography>
						<Typography variant="bodySmall">
							Take your development career to new heights with our
							career-focused resources, mentorship programs, and
							industry connections, designed to help you navigate
							the path to success.
						</Typography>
					</OfferInfo>
				</OfferCard>
			</OffersContainer>
			<Xarrow
				startAnchor={"middle"}
				endAnchor={"middle"}
				start={Logo1ref}
				end={Logo2ref}
				lineColor={theme?.colors.bgTertiary}
				showHead={false}
				curveness={0}
				zIndex={-1}
			/>
			<Xarrow
				startAnchor={"middle"}
				endAnchor={"middle"}
				start={Logo2ref}
				end={Logo3ref}
				lineColor={theme?.colors.bgTertiary}
				showHead={false}
				curveness={0}
				zIndex={-1}
			/>
			<Xarrow
				startAnchor={"middle"}
				endAnchor={"middle"}
				start={Logo3ref}
				end={Logo4ref}
				lineColor={theme?.colors.bgTertiary}
				showHead={false}
				curveness={0}
				zIndex={-1}
			/>
		</Container>
	);
}

export default OfferSection;
