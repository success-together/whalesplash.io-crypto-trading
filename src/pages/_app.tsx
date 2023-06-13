import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/style.css';

import ThemeContextProvider from '@/context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp;
