import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/scss/main.scss';

import ThemeContextProvider from '@/context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp;
