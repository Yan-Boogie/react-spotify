// import * as React from 'react';

const TOKEN = `BQCMnFF8ObhVCl9JchjM7hcE4DHJTqSOKYqAD_5_VXVlRim_q9U3n2ogT0689Jv_
GAQWLvRKviScO06OMx-WqajMF9-gBErNTwvXI_R11lPAUJKr753zPdbzXSHA-uJBvysllMGZvnW-m-VaLp3nr2eQC77icxfeN9MPiQbs7KjmQlJs`;

export default function useSpotifyPlatform() {
  return fetch('https://api.spotify.com/v1/me/playlists', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      authorization: `Bearer ${TOKEN}`,
    }),
  }).then((response) => response.json());
}
