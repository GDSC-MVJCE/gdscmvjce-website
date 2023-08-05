import { styled } from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-height: 100svh;
	display: flex;
	padding: 0 5em;
`;

export const LeftContainer = styled.div`
	width: 30%;
	height: 100%;
	position: sticky;
	top: 0;
	left: 0;
`;

export const RightContainer = styled.div`
	width: 70%;
	height: 100%;
	overflow: hidden;
`;

export const Title = styled.h1`
	margin-top: 0.8em;
	font-size: 4rem;
	font-weight: normal;
`;

export const OptionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 2em;
	gap: 1em;
`;

export const Button = styled.button`
	padding: 0.8em 1.4em;
	color: ${({ color, theme }) =>
		color ? color : theme.colors.contentPrimary};
	font-size: 1.4rem;
	border-radius: 50px;
	border: 2px solid ${({ theme }) => theme.colors.contentPrimary};
	width: fit-content;
	cursor: pointer;
	background: ${({ inView, bgcolor, theme }) =>
		inView ? bgcolor : theme.colors.bgPrimary};
	font-weight: 500;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid ${({ theme }) => theme.colors.contentPrimary};
	border-radius: 20px;
	overflow: hidden;
	margin-bottom: 2.2em;
`;

export const CardContainer = styled.div`
	padding: 2.5em 2.4em;
`;

export const CardTitleContainer = styled.div`
	background-color: ${({ bgcolor }) => bgcolor};
	width: 100%;
	padding: 1.5em 2.4em;
	border-bottom: 2px solid ${({ theme }) => theme.colors.contentPrimary};
`;

export const CardFaq = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-block: 1em;
`;

export const Hr = styled.div`
	margin-top: 2em;
	height: 2px;
	background: ${({ theme }) => theme.colors.contentPrimary};
	border-radius: 100px;
`;
