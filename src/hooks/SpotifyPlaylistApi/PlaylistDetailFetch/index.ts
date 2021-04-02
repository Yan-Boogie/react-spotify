import useSpotifyApiRequest from '../../SpotifyApiRequest';

type AdditionalType = 'track' | 'episode';

type UsePlaylistDetailFetch = {
  playlistId: string;
  market?: string;
  fields?: string;
  additionalTypeList?: AdditionalType[];
};

export default function usePlaylistDetailFetch({
  playlistId,
  market = 'from_token',
  fields,
  additionalTypeList,
}: UsePlaylistDetailFetch) {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}
    ?market=${market}&fields=${fields}&additional_types=${additionalTypeList?.join(',')}`;

  return useSpotifyApiRequest({
    requestUrl: url,
    requestMethod: 'GET',
  });
}
