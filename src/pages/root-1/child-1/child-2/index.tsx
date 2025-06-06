import Head from "next/head";
import { LandingBody } from "@/components/LandingBody";
export default function Page() {
  return (
    <>
      <Head>
        <title>Child 2</title>
      </Head>
      <LandingBody
        t1="What We Do"
        t2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </>
  );
}
