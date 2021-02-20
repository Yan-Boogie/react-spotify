import * as React from 'react';
import { UserTokenContext } from './context';

/**
 * @todo
 * Remove mock TOKEN
 */
const TOKEN = `BQCMnFF8ObhVCl9JchjM7hcE4DHJTqSOKYqAD_5_VXVlRim_q9U3n2ogT0689Jv_
GAQWLvRKviScO06OMx-WqajMF9-gBErNTwvXI_R11lPAUJKr753zPdbzXSHA-uJBvysllMGZvnW-m-VaLp3nr2eQC77icxfeN9MPiQbs7KjmQlJs`;

export const useSpotify = (token: string = TOKEN) => ({
  Spotify: ({ children }: { children: () => React.ReactNode }) => (
    <UserTokenContext.Provider value={token}>
      {() => children()}
    </UserTokenContext.Provider>
  ),
});

export default useSpotify;

