import Head from "next/head";
import { LandingBody } from "@/components/LandingBody";
import { LandingFooter } from "@/components/LandingFooter";
import { LandingHero } from "@/components/LandingHero";
export default function Page() {
  return (
    <>
      <Head>
        <title>Mi Home</title>
      </Head>
      <>
        <LandingHero
          t1="Welcome to Our Platform"
          t2="Explore the infinite possibilities with us."
          t3="Get Started"
        />
        <LandingFooter t1="© 2022 Our Platform" />
        <LandingBody
          t1="What We Do"
          t2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </>
    </>
  );
}
