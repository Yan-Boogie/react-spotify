import React from 'react';
import { UserTokenContext } from './context';

import { TOKEN } from './mock';

export default function useSpotify(token: string = TOKEN) {
  return {
    Spotify: ({ children }: { children: () => React.ReactNode }) => (
      <UserTokenContext.Provider value={token}>
        {() => children()}
      </UserTokenContext.Provider>
    ),
  };
}
