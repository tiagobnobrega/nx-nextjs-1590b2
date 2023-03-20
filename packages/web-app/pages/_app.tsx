import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
// import {mylibWp} from '@nextjs-test/mylib-wp'
import {MylibNext, mylibNextTs} from "@nextjs-test/mylib-next";
import { mylib } from '@nextjs-test/mylib';

function CustomApp({ Component, pageProps }: AppProps) {
  console.log('My lib:' + mylibNextTs());
  console.log('My lib:' + mylib());
  return (
    <>
      <Head>
        <title>Welcome to web-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
        <MylibNext/>
      </main>
    </>
  );
}

export default CustomApp;

