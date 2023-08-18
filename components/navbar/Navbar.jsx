import React, { useEffect, useState } from "react";
import {
  MainContainer,
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  MenuContainer,
  MenuLink,
  Ul,
  Li,
  NavText,
  TopContainer,
  BottomContainer,
  LogoContainer
} from "./Navbar.styled";
import Logo from "../../public/logo.svg";
import { devices } from "@/constants/theme";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "styled-components";
import { navbarData } from "@/constants/navbarData";
import Link from "next/link";
import Typography from "../display/typography/Typography";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("/home");
  const theme = useTheme();

  console.log(router.pathname);

  useEffect(() => {
    const mediaQuery = window.matchMedia(devices.lg);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const navLinks = navbarData.map((link) => (
    <Link key={link.title} href={link.path} style={{ textDecoration: "none" }}>
      <Li isActive={path === link.path ? true : false}>
        <NavText variant="bodySmallEmphasized">{link.title}</NavText>
      </Li>
    </Link>
  ));

  const menuLinks = navbarData.map((link) => (
    <MenuLink key={link.title} href={link.path}>
      <Typography variant="bodyEmphasized">{link.title}</Typography>
    </MenuLink>
  ));

  return (
    <MainContainer>
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <LogoContainer>
              <Link href="/">
                <Image
                  src={"../../logo.svg"}
                  alt={"GDSC Logo"}
                  fill="responsive"
                />
              </Link>
            </LogoContainer>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              {isMobile ? (
                isOpen ? (
                  <CloseIcon
                    sx={{
                      color: theme.colors.contentSecondary,
                      cursor: "pointer",
                      fontSize: "1.5rem"
                    }}
                    onClick={handleToggle}
                  />
                ) : (
                  <MenuIcon
                    sx={{
                      color: theme.colors.contentSecondary,
                      cursor: "pointer",
                      fontSize: "1.5rem"
                    }}
                    onClick={handleToggle}
                  />
                )
              ) : (
                <Ul>{navLinks}</Ul>
              )}
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
      {isOpen && isMobile && (
        <MenuContainer initial={{ left: "100%" }} animate={{ left: "0%" }}>
          <TopContainer>
            <LogoContainer isMobile={isMobile}>
              <Image
                src={"../../logo.svg"}
                alt={"GDSC Logo"}
                fill="responsive"
              />
            </LogoContainer>
            <CloseIcon
              sx={{
                color: theme.colors.contentSecondary,
                cursor: "pointer",
                fontSize: "1.5rem"
              }}
              onClick={handleToggle}
            />
          </TopContainer>
          <BottomContainer>{menuLinks}</BottomContainer>
        </MenuContainer>
      )}
    </MainContainer>
  );
}

export default Navbar;
