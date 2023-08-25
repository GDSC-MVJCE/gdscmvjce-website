import TeamTimeline from "@/components/team/teamTimeline/TeamTimeline";
import Head from "next/head";

const TeamTimeLinePage = () => {
  return (
    <>
      <Head>
        <title>Team Timeline | GDSC MVJCE</title>
        <meta
          name="description"
          content={
            "The amazing team behind GDSC MVJCE working dilligently towards empowering the student developer community in our college."
          }
        />
        <meta property="og:title" content={"Team - GDSC MVJCE"} />
        <meta
          property="og:description"
          content={
            "The amazing team behind GDSC MVJCE working dilligently towards empowering the student developer community in our college."
          }
        />
        <meta property="og:image" content={"/images/gdsc_fallback.png"} />
      </Head>
      <TeamTimeline />
    </>
  );
};

export default TeamTimeLinePage;
