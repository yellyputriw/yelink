import { NextPage } from "next";
import Head from "next/head";
import AUList from "../components/svtAU";

const SVTAU: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary"></meta>
      </Head>
      <AUList />
    </>
  );
};

export default SVTAU;
