import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
  height: 100%;
  padding: 2em 10em;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
`;

export const OffersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const OfferLogo = styled.div`
  width: 130px;
  height: 130px;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "white")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const OfferCard = styled.div`
  display: flex;
  width: 80%;
  gap: 2em;
  align-items: center;
  margin-block: 2.5em;
`;

export const OfferInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 0.5em;
`;
