
import '../styles/globals.scss'

import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import '../styles/user/style.scss';
import '../styles/new.scss'
import '../styles/animate.css'
import '../styles/new-custom.css'
import '../styles/NwStyle.css'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <div id='body'>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </div>
  );
}
