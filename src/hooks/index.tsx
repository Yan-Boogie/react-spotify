import React from 'react';
import { UserTokenContext } from './context';

export { default as useSpotifyApiRequest } from './SpotifyApiRequest';

export function useSpotify(token: string) {
  return {
    Spotify: ({ children }: { children: React.ReactNode }) => (
      <UserTokenContext.Provider value={token}>
        {children}
      </UserTokenContext.Provider>
    ),
  };
}
