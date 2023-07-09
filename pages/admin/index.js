import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import Typography from "./../../components/display/typography/Typography";
const App = dynamic(() => import("../../admin/App"), { ssr: false });

const admin = ({ isAdmin }) => {
  if (!isAdmin) {
    return (
      <div>
        <Typography>Access not allowed.</Typography>
      </div>
    );
  }
  return <App />;
};

export default admin;

export const getServerSideProps = async (ctx) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (session) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: session.user.id,
        },
      });
      if (user) {
        return {
          props: {
            isAdmin: user.isAdmin ? true : false,
          },
        };
      }
    } catch (error) {
      return {
        redirect: {
          destination: "/admin/login",
          permanent: false,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
};
