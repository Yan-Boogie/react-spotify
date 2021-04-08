import 'globals.scss';
import { PlayerBoard } from 'components/players';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <p>Initial app</p>
      <Component {...pageProps} />
      <PlayerBoard />
    </main>
  );
}
