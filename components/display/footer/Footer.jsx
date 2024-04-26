import Link from "next/link";
import Image from "next/image";

import {
  Authors,
  AvatarStack,
  FooterContainer,
  FooterGithub,
  FooterMeta,
  FooterSocialIcons,
  FooterSocials,
  LogoContainer,
  LogoWrapper
} from "./Footer.styled";
import Typography from "../typography/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import Avatar from "@/components/avatar/Avatar";
import { useEffect, useState } from "react";
import { devices, lightTheme } from "@/constants/theme";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(devices.sm);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <FooterContainer>
      <LogoWrapper>
        <LogoContainer>
          <Link href="/">
            <Image
              src={"/logos/gdscmvjce-logo.svg"}
              alt={"GDSC Logo"}
              fill="responsive"
              sizes="500px"
            />
          </Link>
        </LogoContainer>
        <Typography
          variant="bodySmall"
          subdued
          style={{ paddingLeft: "0.5em" }}
        >
          Near ITPB, Channasandra, Bangalore - 560067
          <br />
          Email : &nbsp;
          <Link
            href="mailto:gdscmvjce@gmail.com"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            gdscmvjce@gmail.com
          </Link>
        </Typography>
      </LogoWrapper>
      <FooterSocials>
        <Typography variant="body" subdued style={{ textAlign: "center" }}>
          Follow us on Social Media
        </Typography>
        <FooterSocialIcons>
          <Link
            href="https://www.linkedin.com/company/gdsc-mvjce"
            target="_blank"
            style={{ color: "gray" }}
          >
            <LinkedInIcon
              style={{ marginBottom: "-5px" }}
              sx={{
                fontSize: 25,
                transition: "all 0.2s ease-in-out",

                "&:hover": {
                  transform: "translate(0, -1px)",
                  color: "#0A66C2"
                }
              }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/gdscmvjce/"
            target="_blank"
            style={{ color: "gray" }}
          >
            <InstagramIcon
              style={{ marginBottom: "-5px" }}
              sx={{
                fontSize: 25,
                transition: "all 0.2s ease-in-out",

                "&:hover": {
                  transform: "translate(0, -1px)",
                  color: "#E1306C"
                }
              }}
            />
          </Link>
          <Link
            href="https://twitter.com/gdscmvjce"
            target="_blank"
            style={{ color: "gray" }}
          >
            <XIcon
              style={{ marginBottom: "-5px" }}
              sx={{
                fontSize: 25,
                transition: "all 0.2s ease-in-out",

                "&:hover": {
                  transform: "translate(0, -1px)",
                  color: "#000000"
                }
              }}
            />
          </Link>
        </FooterSocialIcons>
      </FooterSocials>
      <FooterMeta>
        <Authors>
          <Typography
            variant="bodySmall"
            subdued
            style={{ whiteSpace: "normal", width: "90%" }}
          >
            Made with ❤️ by
          </Typography>
          <AvatarStack>
            <Link
              href="https://www.linkedin.com/in/shivamsharma77607/"
              target="_blank"
            >
              <Avatar
                size={isMobile ? "xs" : "sm"}
                borderColor={lightTheme.colors.brandGreen}
                url={
                  "https://res.cloudinary.com/dp9ikb8xo/image/upload/v1714028417/Members/image/shivam_ykzzbx.png"
                }
                className="first hover-effect"
                borderWidth={"2px"}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sidharth-sreejil/"
              target="_blank"
            >
              <Avatar
                size={isMobile ? "xs" : "sm"}
                borderColor={lightTheme.colors.brandRed}
                url={
                  "https://res.cloudinary.com/dp9ikb8xo/image/upload/v1694959191/Members/image/sidh-gdsc-enhanced_h1ia1k.png"
                }
                className="second hover-effect"
                borderWidth={"2px"}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sumith-b-h-276b53239/"
              target="_blank"
            >
              <Avatar
                size={isMobile ? "xs" : "sm"}
                borderColor={lightTheme.colors.brandBlue}
                url={
                  "https://res.cloudinary.com/dp9ikb8xo/image/upload/v1692537067/Members/image/sumith.jpg"
                }
                className="third hover-effect"
                borderWidth={"2px"}
              />
            </Link>
          </AvatarStack>{" "}
        </Authors>

        <FooterGithub
          href="https://github.com/GDSC-MVJCE/gdscmvjce-website"
          target="_blank"
        >
          <GitHubIcon
            sx={{
              fontSize: 25,
              transition: "all 0.2s ease-in-out",

              "&:hover": {
                transform: "translate(0, -1px)",
                color: "#211F1F"
              }
            }}
          />
          <Typography variant="bodySmall" style={{ color: "inherit" }}>
            View source code
          </Typography>
        </FooterGithub>
      </FooterMeta>
    </FooterContainer>
  );
}

export default Footer;
