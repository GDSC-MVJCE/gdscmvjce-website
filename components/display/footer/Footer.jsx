import React from "react";
import {
  FooterContainer,
  FooterGithub,
  FooterLogo,
  FooterMeta,
  FooterSocialIcons,
  FooterSocials,
  LogoContainer
} from "./Footer.styled";
import Logo from "../../../public/logo.svg";
import Typography from "../typography/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <FooterLogo>
          <Logo />
        </FooterLogo>

        <Typography variant="bodySmall" subdued>
          Near ITPB, Channasandra, Bangalore - 560067
          <br />
          Email : gdscmvjce@gmail.com
        </Typography>
      </LogoContainer>
      <FooterSocials>
        <Typography variant="body" subdued>
          Follow us on Social Media
        </Typography>
        <FooterSocialIcons>
          <Link
            href="https://www.linkedin.com/company/gdsc-mvjce"
            target="_blank"
            style={{ color: "gray" }}
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://www.instagram.com/gdscmvjce/"
            target="_blank"
            style={{ color: "gray" }}
          >
            <InstagramIcon />
          </Link>
          <Link href="" target="_blank" style={{ color: "gray" }}>
            <TwitterIcon />
          </Link>
        </FooterSocialIcons>
      </FooterSocials>
      <FooterMeta>
        <Typography variant="bodySmall" subdued>
          Made with &lt;3 by GDSC Tech and ML Team 2023
        </Typography>
        <FooterGithub>
          <Link
            href="https://github.com/GDSC-MVJCE/gdscmvjce-website"
            target="_blank"
            style={{ color: "gray" }}
          >
            <GitHubIcon />
          </Link>
          <Typography variant="bodySmall">View source code</Typography>
        </FooterGithub>
      </FooterMeta>
    </FooterContainer>
  );
};

export default Footer;
