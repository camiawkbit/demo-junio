import Head from "next/head";
import { LandingBody } from "@/components/LandingBody";
import { LandingFooter } from "@/components/LandingFooter";
import { LandingHero } from "@/components/LandingHero";
import { tailblocksblock1 } from "@/components/tailblocksblock1";
import { tailblocksblock2 } from "@/components/tailblocksblock2";
export default function Page() {
  return (
    <>
      <Head>
        <title>Root 1</title>
      </Head>
      <>
        <tailblocksblock1 t1="Block1" />
        <LandingBody
          t1="What We Do"
          t2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <LandingFooter t1="© 2022 Our Platform" />
        <tailblocksblock2 t1="Block2" />
        <LandingHero
          t1="Welcome to Our Platform"
          t2="Explore the infinite possibilities with us."
          t3="Get Started"
        />
      </>
    </>
  );
}
