import styled from "styled-components";

export const ArticleFooterContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 245px;
  gap: 50px;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const ArticleFooterImg = styled.img`
  //   height: 245px;
  //   width: 245px;
  width: 20%;
  height: 100%;
  object-fit: cover;
`;

export const ArticleFooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //   width: 70%;
  //   height: 100%;
`;

export const ArticleFooterTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  //   width: 100%;
  //   height: 100%;
`;

// export const ArticleFooterMetaContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   width: 100%;
// `;
