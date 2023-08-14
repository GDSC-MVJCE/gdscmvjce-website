import { motion } from "framer-motion";
import styled from "styled-components";

export const EventsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 5em;
  gap: 1em;
  height: 100%;
  width: 100%;
`;

export const EventsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const LeftContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: hidden;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  padding: 0 2em;
  gap: 1.5em;
  position: sticky;
  top: 20px;
  right: 0;
`;

export const EventsCard = styled(motion.div)`
	display: flex;
	width: 100%;
	height: 300px;
	box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.16);
	border-radius: 10px;
	margin-bottom: 1em;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	overflow: hidden;
	transform-style: preserve-3d;
	-webkit-transform-style: preserve-3d;
	-moz-transform-style: preserve-3d;
	-o-transform-style: preserve-3d;
	-ms-transform-style: preserve-3d;
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
	-webkit-font-smoothing: antialiased;

	&:hover {
		box-shadow: 0px 0px 44px -2px rgba(0, 0, 0, 0.16);
		transform: scale(1.01);
		transform-style: preserve-3d;
		-webkit-transform-style: preserve-3d;
		-moz-transform-style: preserve-3d;
		-o-transform-style: preserve-3d;
		-ms-transform-style: preserve-3d;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}
`;

export const ImageContainer = styled(motion.div)`
  width: 31%;
  max-width: 300px;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px 0 0 10px;
`;

export const EventInfo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  padding: 2.5em 1.3em;
  overflow: hidden;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

export const EventTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const FilterCard = styled(motion.div)`
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgTertiary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.contentPrimary};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.brandYellow};
  }
`;
