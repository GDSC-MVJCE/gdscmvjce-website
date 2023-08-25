import TeamPage from "@/components/team/TeamPage";
import prisma from "@/lib/prisma";
import Head from "next/head";
import React from "react";

const Team = ({ teamData }) => {
  return (
    <>
      <Head>
        <title>{teamData.name} | GDSC MVJCE</title>
        <meta
          name="description"
          content={
            "The amazing team behind GDSC MVJCE working dilligently towards empowering the student developer community in our college."
          }
        />
        <meta property="og:title" content={teamData.name + " | GDSC MVJCE"} />
        <meta
          property="og:description"
          content={
            "The amazing team behind GDSC MVJCE working dilligently towards empowering the student developer community in our college."
          }
        />
        <meta property="og:image" content={"/images/gdsc_fallback.png"} />
      </Head>
      <TeamPage teamData={teamData} />
    </>
  );
};

export default Team;

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const response = await prisma.team.findUnique({
    include: {
      members: {
        include: {
          profile: true
        },
        orderBy: {
          priority: "asc"
        }
      }
    },
    where: {
      slug: slug
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
  } else {
    return {
      notFound: true
    };
  }
};

export const getStaticPaths = async (ctx) => {
  const response = await prisma.team.findMany({
    select: {
      slug: true
    }
  });
  const paths = response.map((team) => ({
    params: {
      slug: team.slug
    }
  }));

  return {
    paths,
    fallback: "blocking"
  };
};
