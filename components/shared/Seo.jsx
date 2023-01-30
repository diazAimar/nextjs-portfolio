import Head from 'next/head';

export default function Seo({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/assets/favicon.ico" />
    </Head>
  );
}
