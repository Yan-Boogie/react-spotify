import React from 'react';
export { default as useSpotifyApiRequest } from './SpotifyApiRequest';
export declare function useSpotify(token?: string): {
    Spotify: ({ children }: {
        children: () => React.ReactNode;
    }) => JSX.Element;
};
