import React from "react";
import localFont from "@next/font/local";
import { JetBrains_Mono as MonoFont } from "@next/font/google";

const fontSans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../../public/assets/fonts/NotoSansKR-Black.otf",
      style: "normal",
      weight: "400",
    },
  ],
});

const monoFont = MonoFont({
  subsets: ["latin"],
  variable: "--font-mono",
  style: "normal",
});

export async function getServerSideProps(ctx: any) {
  return {
    props: {},
  };
}

export default function FontTest() {
  return (
    <>
      {/* local font */}
      <p style={{ fontFamily: fontSans.style.fontFamily }}>
        font 1 - NotoSansKR-Black
      </p>
      {/* google font */}
      <p style={{ fontFamily: monoFont.style.fontFamily }}>
        font 2 - JetBrains_Mono
      </p>
    </>
  );
}
