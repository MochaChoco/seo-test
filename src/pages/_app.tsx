// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Theme from "public/assets/theme.js";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
