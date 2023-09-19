import React from "react";
import Link from "next/link";
import styled from "styled-components";

export async function getServerSideProps(ctx: any) {
  return {
    props: {},
  };
}

export default function LinkTest() {
  return (
    <>
      <Link href="/image-optimization">Image Optimization</Link>
      <Link href="/script-optimization">Script Optimization</Link>
      <Link href="/font-optimization" passHref legacyBehavior>
        <StyledLink>Font Optimization</StyledLink>
      </Link>
    </>
  );
}

const StyledLink = styled.a`
  color: red;
`;
