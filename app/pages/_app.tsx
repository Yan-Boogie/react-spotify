import 'globals.scss';
import Player from 'components/player/';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <p>Initial app</p>
      <Component {...pageProps} />
      <Player />
    </main>
  );
}
