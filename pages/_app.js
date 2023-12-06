import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { useEffect, useState } from "react";
import NextTopLoader from "nextjs-toploader";

import { lightTheme } from "@/constants/theme";
import GlobalStyles from "@/constants/globalStyles";
import AuthProvider from "@/components/AuthProvider";
import GradientAnimation from "@/components/gradientAnimation/GradientAnimation";
import Layout from "@/components/layout";
import Loader from "@/components/display/loader/Loader";

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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);

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
            <NextTopLoader
              color="#4285F4"
              initialPosition={0.05}
              crawlSpeed={200}
              height={5}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
              zIndex={1600}
              showAtBottom={false}
            />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
          <GradientAnimation />
        </ThemeProvider>
        <Analytics />
      </AuthProvider>
    </>
  );
}
