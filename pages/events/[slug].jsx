import EventPage from "@/components/eventPage/EventPage";
import Navbar from "@/components/navbar/Navbar";
import prisma from "@/lib/prisma";

export default function Event({ eventData }) {
  return (
    <>
      <Navbar />
      <EventPage eventData={eventData} />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  console.log(slug);
  const event = await prisma.event.findUnique({
    include: {
      speakers: true
    },
    where: {
      slug: slug
    }
  });
  if (event) {
    event.startDate = String(event.startDate);
    event.endDate = String(event.endDate);
    console.log(event);
    return {
      props: {
        eventData: event
      },
      revalidate: 20
    };
  } else {
    return {
      notFound: true
    };
  }
};

export async function getStaticPaths() {
  const events = await prisma.event.findMany({
    select: {
      slug: true
    }
  });
  console.log("Loaded Slugs: ", events);
  if (events) {
    const eventSlugs = events.filter((event) => event.slug !== null);
    const paths = eventSlugs.map((event) => {
      return {
        params: {
          slug: event.slug
        }
      };
    });
    return {
      paths: paths,
      fallback: false // can also be true or 'blocking'
    };
  }
}
