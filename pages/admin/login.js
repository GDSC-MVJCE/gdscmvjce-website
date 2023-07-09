import Typography from "@/components/display/typography/Typography";
import { signIn } from "next-auth/react";
import React from "react";
import { Button } from "react-admin";

const Login = () => {
  return (
    <div onClick={() => signIn()}>
      <Typography variant="h1">Sign in to Admin Dashboard</Typography>
    </div>
  );
};

export default Login;
