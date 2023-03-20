import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
// import { mylib } from '@nextjs-test/mylib';
import {mylibWp} from '@nextjs-test/mylib-wp'

function CustomApp({ Component, pageProps }: AppProps) {
  console.log('My lib:' + mylibWp());
  return (
    <>
      <Head>
        <title>Welcome to web-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
