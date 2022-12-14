import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>index</title>
        <meta name="description" content="Index Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>[index]</div>

      <hr />
      <Link href="/test">
        <a>test</a>
      </Link>
    </div>
  );
};

export default Home;
