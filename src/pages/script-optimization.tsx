import React from "react";
import Script from "next/script";

export async function getServerSideProps(ctx: any) {
  return {
    props: {},
  };
}

export default function ScriptTest() {
  return (
    <>
      <p>Script Test</p>
      <Script src="scripts/test-script.js" />
    </>
  );
}
