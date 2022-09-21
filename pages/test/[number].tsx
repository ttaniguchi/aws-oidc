import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const id = router.query.number as string;

  return (
    <div>
      <Head>
        <title>[number]</title>
        <meta name="description" content="Index Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>[number - {id}]</div>

      <hr />
      <Link href="/test">
        <a>test</a>
      </Link>
    </div>
  );
};

export default Home;
