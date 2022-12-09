import Head from 'next/head';
import Props from './type';

const HeadTag = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} key='title' />
    </Head>
  );
};

export default HeadTag;
