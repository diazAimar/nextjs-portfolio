import Head from 'next/head';
import Menu from '../components/home/Menu';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
    </>
  );
}
