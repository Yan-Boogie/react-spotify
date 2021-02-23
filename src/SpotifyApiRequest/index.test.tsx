import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useSpotifyApiRequest from './index';
import { UserTokenContext } from '../context';

import { TOKEN } from '../mock';

describe('SpotifyApiRequest tests', () => {
  test('It should returned something!!', async () => {
    const wrapper = ({ children }: { children: () => React.ReactNode }) => (
      <UserTokenContext.Provider value={TOKEN}>
        {children}
      </UserTokenContext.Provider>
    );
    const { result, waitForNextUpdate } = renderHook(() => useSpotifyApiRequest({
      requestUrl: 'https://api.spotify.com/v1/me/playlists',
      requestMethod: 'GET',
    }), { wrapper });

    // eslint-disable-next-line no-console
    console.log('current', result.current);

    await waitForNextUpdate();

    expect(result.current.apiReturned).not.toBe(null);
  });
});
