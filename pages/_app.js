import GlobalStyles from "@/constants/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/constants/theme";

import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GoogleSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <main className={myFont.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
