import styled, { css } from "styled-components";
import Link from "next/link";
import Typography from "../display/typography/Typography";
import { motion } from "framer-motion";
import { devices } from "@/constants/theme";

export const MainContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
`;

export const NavbarContainer = styled.nav`
  width: 90%;
  height: 100%;
  margin: 20px 20px;
  background-color: ${({ theme }) => theme.colors.bgPrimary + 50};
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  backdrop-filter: blur(50px);
`;

export const LeftContainer = styled.div`
  width: 400px;
  height: 100%;
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

  @media screen and (${devices.sm}) {
    height: 56px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  flex: 70%;
  justify-content: end;
  margin-right: 1em;
  align-items: center;
`;

export const NavText = styled(Typography)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contentPrimary};
  margin: 1em;
  opacity: 0.7;
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &:focus-visible {
    opacity: 1;
    color: ${({ theme }) => theme.colors.brandBlue};
  }
`;

export const Li = styled.li`
  overflow: hidden;
  position: relative;
  padding: 0.6em 0em;
  margin: 0em 0.6em;
  text-decoration: none;
  ${({ isActive }) =>
    isActive === true &&
    css`
      --_scale: 1;

      ${NavText} {
        color: ${({ theme }) => theme.colors.brandBlue};
        opacity: 1;
      }
    `}

  &::after {
    content: "";
    position: absolute;
    inset-inline: 0;
    inset-block-end: 0;
    block-size: 3px;
    background-color: ${({ theme }) => theme.colors.brandBlue};
    translate: var(--_translate, 0);
    scale: var(--_scale, 0) 1;
    transition: scale 100ms var(--_scale-delay, 0ms), translate 200ms;
  }

  &:hover {
    --_scale: 1;
    --_translate: 0;
    --_scale-delay: 0ms;
  }

  &:hover ${NavText} {
    color: ${({ theme }) => theme.colors.brandBlue};
    opacity: 1;
  }

  @media screen and (${devices.xl}) {
    margin: 0.6em 0.2em;
  }
`;

export const MenuContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 3em;
  position: fixed;
  top: 0;
  left: 100%;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  z-index: 20;
  transition: all 200ms ease-out;

  @media screen and (${devices.sm}) {
    padding: 2em 1.5em;
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2em 0.5em;
  gap: 1em;
`;

export const MenuLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgTertiary};
  padding-bottom: 0.5em;
  color: ${({ theme, isActive }) => isActive && theme.colors.brandBlue};
`;

export const MenuItem = styled(Typography)`
  color: ${({ theme, isActive }) => isActive && theme.colors.brandBlue};
`;

export const LogoContainer = styled.div`
  width: 400px;
  aspect-ratio: 380/42;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;

  @media screen and (${devices.xl}) {
    width: ${({ isMobile }) => !isMobile && "300px"};
  }

  @media screen and (${devices.sm}) {
    width: ${({ isMobile }) => (!isMobile ? "200px" : "300px")};
  }
`;
