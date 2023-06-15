import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import '@/styles/globals.css';
import '@/styles/tailwind.css';
import '@/scss/main.scss';

// import ThemeContextProvider from '@/context/ThemeContext';

const ThemeContextProvider = dynamic(
  () => import('@/context/ThemeContext'),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp;
