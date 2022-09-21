import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>test</title>
        <meta name="description" content="test Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <hr />
      <div>[test]</div>

      <hr />
      <Link href="/test/1">
        <a>test/1</a>
      </Link>

      <hr />
      <Link href="/test/2">
        <a>test/2</a>
      </Link>

      <hr />
      <Link href="/test">
        <a>test</a>
      </Link>
    </div>
  );
};

export default Home;
