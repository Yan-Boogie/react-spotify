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
  
}
