import React from "react";
import {
  FooterContainer,
  FooterGithub,
  FooterMeta,
  FooterSocialIcons,
  FooterSocials,
  LogoContainer,
  LogoDiv,
  LogoText,
} from "./Footer.styled";
import Logo from "../../../public/logo.svg";
import Typography from "../typography/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo />

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
          <InstagramIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </FooterSocialIcons>
      </FooterSocials>
      <FooterMeta>
        <Typography variant="bodySmall" subdued>
          Made with &lt;3 by GDSC Tech and ML Team 2023
        </Typography>
        <FooterGithub>
          <GitHubIcon />
          <Typography variant="bodySmall">View source code</Typography>
        </FooterGithub>
      </FooterMeta>
    </FooterContainer>
    // Footer Social links not yet clickable.
  );
};

export default Footer;
