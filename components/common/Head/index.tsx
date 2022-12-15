import Head from 'next/head';
import Props from './type';

const HeadTag = ({ title, description }: Props) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='keywords' content='Events,Events-managment,Nextjs,Next-events,All events' />
      <meta name='author' content='Bhavya Bhut' />
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:title' content={title} key='title' />
      <meta name='description' content={description} />
    </Head>
  );
};

export default HeadTag;
