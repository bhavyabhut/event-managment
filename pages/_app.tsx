import Router from 'next/router';
import NProgress from 'nprogress';
import type { AppProps } from 'next/app';

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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
