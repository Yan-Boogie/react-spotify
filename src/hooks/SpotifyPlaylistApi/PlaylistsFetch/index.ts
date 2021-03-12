import useSpotifyApiRequest from '../../SpotifyApiRequest';

type UsePlaylistsFetchProps = {
  userId?: string;
  limit?: number;
  offset?: number;
};

export default function usePlaylistsFetch({
  userId,
  limit = 10,
  offset = 0,
}: UsePlaylistsFetchProps) {
  const url = userId
    ? `https://api.spotify.com/v1/users/${userId}/playlists` : 'https://api.spotify.com/v1/me/playlists';

  return useSpotifyApiRequest({
    requestUrl: url,
    requestMethod: 'GET',
    fetchMoreBundle: {
      limit,
      offset,
    },
  });
}
