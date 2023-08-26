import React from "react";
import { LoaderContainer } from "./Loader.styled";
import Lottie from "lottie-react";
import LogoAnimationData from "@/public/logos/logo-animation-lottie.json";

const Loader = () => {
  return (
    <LoaderContainer>
      <Lottie
        animationData={LogoAnimationData}
        loop={false}
        style={{
          width: "50vw"
        }}
      />
    </LoaderContainer>
  );
};

export default Loader;
