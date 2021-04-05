import 'styles/globals.scss';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <p>Initial app</p>
      <Component {...pageProps} />
    </div>
  );
}
