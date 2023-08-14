import styled from "styled-components";
import Link from "next/link";

export const MainContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const NavbarContainer = styled.nav`
  width: 90%;
  height: 80px;
  margin: 20px 20px;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem 1rem;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  flex: 70%;
  justify-content: end;
  margin-right: 2rem;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin: 1rem;
`;

export const NavbarExtendedContainer = styled.div``;
