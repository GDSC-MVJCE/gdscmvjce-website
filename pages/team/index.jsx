import TeamPage from "@/components/team/TeamPage";
import prisma from "@/lib/prisma";
import React from "react";

const Team = ({ teamData }) => {
  return <TeamPage teamData={teamData} />;
};

export default Team;

export const getServerSideProps = async (ctx) => {
  const response = await prisma.team.findUnique({
    include: {
      members: {
        include: {
          profile: true
        }
      }
    },
    where: {
      id: 4
    }
  });
  if (response) {
    let teamData = {};

    const { name, members } = response;

    teamData = {
      name,
      lead: members.find((member) => member.type === "lead"),
      members: members.filter((member) => member.type === "member"),
      core: members.filter((member) => member.type === "core")
    };

    return {
      props: {
        teamData
      }
    };
  }
};
