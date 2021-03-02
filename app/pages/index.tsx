/* eslint-disable no-console */
import { useEffect } from 'react';
import { useSpotifyApiRequest, useSpotify } from '../../src';
import { TOKEN } from '../mock';

const SpotifyPlaylist = () => {
  const { isLoading, error, apiReturned } = useSpotifyApiRequest({
    requestUrl: 'https://api.spotify.com/v1/me/playlists',
    requestMethod: 'GET',
  });

  console.log('app data---->', isLoading, error, apiReturned);

  return (
    <div>
      <span>testing</span>
    </div>
  );
};

export default function HomePage() {
  const { Spotify } = useSpotify(TOKEN);

  return (
    <Spotify>
      <SpotifyPlaylist />
    </Spotify>
  );
}
