import Navbar from "@/components/navbar/Navbar";
import React from "react";
import {
  Profile,
  ProfileAbout,
  ProfileAboutContent,
  ProfileAboutHeading,
  ProfileBanner,
  ProfileBannerAvatar,
  ProfileBio,
  ProfileBlogArticles,
  ProfileBlogArticlesContent,
  ProfileBlogArticlesHeading,
  ProfileDesignation,
  ProfileDiv,
  ProfileFooter,
  ProfileFooterContent,
  ProfileFooterHeading,
  ProfileName,
  ProfileSocial
} from "./profilepage.styled";
import Avatar from "@/components/avatar/Avatar";
import Typography from "@/components/display/typography/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ProfilePageComponent = () => {
  return (
    <>
      <Navbar />
      <Profile>
        <ProfileBanner>
          <ProfileBannerAvatar>
            <Avatar
              url="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
              size="xl"
            />
          </ProfileBannerAvatar>
        </ProfileBanner>
        <ProfileDiv>
          <ProfileName>
            <Typography variant="h2">Varun Panyam</Typography>
          </ProfileName>
          <ProfileDesignation>
            <Typography variant="p">Apple CEO</Typography>
          </ProfileDesignation>
          <ProfileBio>
            <Typography color="success" variant="p">
              I use arch and rust BTW.
            </Typography>
          </ProfileBio>
          <ProfileSocial>
            <GitHubIcon />
            <InstagramIcon />
            <LinkedInIcon />
            {/* Icons not clickable, yet. */}
          </ProfileSocial>

          <ProfileAbout>
            <ProfileAboutHeading>
              <Typography variant="h3">About Me</Typography>
            </ProfileAboutHeading>
            <ProfileAboutContent>
              <Typography variant="p">
                I use arch and rust BTW I use arch and rust BTW I use arch and
                rust BTW I use arch and rust BTW I use arch and rust BTW I use
                arch and rust BTW I use arch and rust BTW I use arch and rust
                BTW I use arch and rust BTW I use arch and rust BTW I use arch
                and rust BTW I use arch and rust BTW I use arch and rust BTW I
                use arch and rust BTW I use arch and rust BTW I use arch and
                rust BTW I use arch and rust BTW I use arch and rust BTW I use
                arch and rust BTW I use arch and rust BTW I use arch and rust
                BTW I use arch and rust BTW I use arch and rust BTW I use arch
                and rust BTW I use arch and rust BTW I use arch and rust BTW I
                use arch and rust BTW I use arch and rust BTW I use arch and
                rust BTW I use arch and rust BTW I use arch and rust BTW I use
                arch and rust BTW
              </Typography>
            </ProfileAboutContent>
          </ProfileAbout>

          <ProfileFooter>
            <ProfileFooterHeading>
              <Typography variant="h3">My Blog Articles</Typography>
            </ProfileFooterHeading>
            <ProfileFooterContent></ProfileFooterContent>
          </ProfileFooter>
        </ProfileDiv>
      </Profile>
    </>
  );
};

export default ProfilePageComponent;
