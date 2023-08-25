import Avatar from "@/components/avatar/Avatar";
import React from "react";
import {
  MemberCardContainer,
  MemberDetailsContainer
} from "./MemberCard.styled";
import Typography from "@/components/display/typography/Typography";
import Link from "next/link";

const MemberCard = ({ member, avatarBorderColor, avatarSize = "lg" }) => {
  return (
    <Link
      href={`${member.profile.profileLink}`}
      target="_blank"
      style={{
        textDecoration: "none"
      }}
    >
      <MemberCardContainer>
        <Avatar
          size={avatarSize}
          blur
          borderColor={avatarBorderColor}
          url={member.profile.image}
          borderWidth={4}
        />
        <MemberDetailsContainer>
          <Typography variant="h5">{member.profile.name}</Typography>
          <Typography variant="bodySmall">{member.role}</Typography>
        </MemberDetailsContainer>
      </MemberCardContainer>
    </Link>
  );
};

export default MemberCard;
