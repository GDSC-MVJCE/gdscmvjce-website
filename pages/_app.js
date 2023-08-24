import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "@/constants/theme";
import GlobalStyles from "@/constants/globalStyles";
import AuthProvider from "@/components/AuthProvider";
import GradientAnimation from "@/components/gradientAnimation/GradientAnimation";
import Layout from "@/components/layout";

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
  return (
    <AuthProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <main className={myFont.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
        <GradientAnimation />
      </ThemeProvider>
    </AuthProvider>
  );
}
