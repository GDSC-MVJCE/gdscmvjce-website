import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "styled-components";

import {
  MainContainer,
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  MenuContainer,
  MenuLink,
  Ul,
  Li,
  NavText,
  TopContainer,
  BottomContainer,
  LogoContainer,
  MenuItem
} from "./Navbar.styled";
import { devices } from "@/constants/theme";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navbarData } from "@/constants/navbarData";

function Navbar() {
  const router = useRouter();
  const path = "/" + router.pathname.split("/")[1];
  const theme = useTheme();

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  }, [path]);

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
    <MenuLink
      key={link.title}
      href={link.path}
      isActive={path === link.path ? true : false}
    >
      <MenuItem
        variant="bodyEmphasized"
        isActive={path === link.path ? true : false}
      >
        {link.title}
      </MenuItem>
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
                  src={"/logos/gdscmvjce-logo.svg"}
                  alt={"GDSC Logo"}
                  fill="responsive"
                  sizes="500px"
                  priority={true}
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
                      fontSize: "1.8rem"
                    }}
                    onClick={handleToggle}
                  />
                ) : (
                  <MenuIcon
                    sx={{
                      color: theme.colors.contentSecondary,
                      cursor: "pointer",
                      fontSize: "1.8rem"
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
                src={"/logos/gdscmvjce-logo.svg"}
                alt={"GDSC Logo"}
                fill="responsive"
                sizes="500px"
              />
            </LogoContainer>
            <CloseIcon
              sx={{
                color: theme.colors.contentSecondary,
                cursor: "pointer",
                fontSize: "1.8rem"
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
