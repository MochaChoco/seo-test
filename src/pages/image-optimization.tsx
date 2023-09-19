import React from "react";
import Image from "next/image";
import TestLogo from "public/images/test-logo.png";

export async function getServerSideProps(ctx: any) {
  return {
    props: {},
  };
}

export default function ImageTest() {
  return (
    <>
      <Image
        src={TestLogo}
        alt="Test Logo"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
    </>
  );
}
