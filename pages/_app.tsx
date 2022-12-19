import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import Layout from '../Layout';

import 'nprogress/nprogress.css';
import '../styles/globals.css';

NProgress.configure({
  minimum: 0.9,
  easing: 'ease',
  speed: 1000,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=G-LXTVRQQRSX`}
      />
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9301119817973342'
        crossOrigin='anonymous'
      />
      <Script strategy='afterInteractive' id='google-analytics'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LXTVRQQRSX', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <Head>
        <meta
          name='google-site-verification'
          content='chd242Usl4NJ6ZOOkJvjmWlPyfs_Mj0zPxKD-Z4oQPI'
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-LXTVRQQRSX`}
        />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9301119817973342'
          crossOrigin='anonymous'
        />
        <script
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9301119817973342'
          crossOrigin='anonymous'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
