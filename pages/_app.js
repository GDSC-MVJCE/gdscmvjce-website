import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "@/constants/theme";
import GlobalStyles from "@/constants/globalStyles";
import AuthProvider from "@/components/AuthProvider";
import GradientAnimation from "@/components/gradientAnimation/GradientAnimation";
import Layout from "@/components/layout";
import Head from "next/head";
import { useEffect, useState } from "react";
import Loader from "@/components/display/loader/Loader";
import { useRouter } from "next/router";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/GoogleSans-Bold.ttf",
      weight: "700",
      style: "normal"
    }
  ]
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);

  useEffect(() => {
    let loadingTimeout;
    const handleRouteChange = (url) => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      clearTimeout(loadingTimeout);

      loadingTimeout = setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      clearTimeout(loadingTimeout);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <AuthProvider>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          {loading && <Loader />}
          <main className={myFont.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
          <GradientAnimation />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
