import {
  useState,
  useEffect,
  useContext,
  useRef,
  useMemo,
} from 'react';
import { UserTokenContext } from '../context';

/**
 * @todo
 * 1. Spotify playback error type
 */

type Error = Readonly<{
  message: string;
  status: number;
}>;

type RequestMethod = 'GET' | 'POST' | 'PUT';

type FetchMoreBundle = {
  limit: number;
  offset: number;
};

type UseSpotifyApiRequest = {
  requestUrl: string;
  requestMethod: RequestMethod;
  fetchMoreBundle?: FetchMoreBundle;
};

export default function useSpotifyApiRequest({
  requestUrl,
  requestMethod,
  fetchMoreBundle,
}: UseSpotifyApiRequest) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const [apiReturned, setApiReturned] = useState<null | unknown>(null);
  const [currentOffset, setCurrentOffset] = useState<number>(fetchMoreBundle?.offset ?? 0);
  const token = useContext(UserTokenContext);
  const isApiRequestCanceled = useRef(false);

  const urlSuffixed = useMemo(() => {
    if (!fetchMoreBundle) return requestUrl;

    const { limit = 10 } = fetchMoreBundle;

    return (~requestUrl.indexOf('?')
      ? requestUrl.replace('?', `?limit=${limit}&offset=${currentOffset}`)
      : `${requestUrl}?limit=${limit}&offset=${currentOffset}`);
  }, [currentOffset]);

  const apiRequest = async () => {
    isApiRequestCanceled.current = false;
    setLoading(true);

    try {
      await fetch(urlSuffixed, {
        method: requestMethod,
        headers: new Headers({
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        }),
      }).then((res) => res.json()).then((response) => {
        if (!isApiRequestCanceled.current) {
          setApiReturned(response);

          if (fetchMoreBundle) setCurrentOffset((prevOffset) => prevOffset + fetchMoreBundle.limit);
        }
      });
    } catch (e) {
      setError(e);
    }

    setLoading(false);
  };

  useEffect(() => {
    apiRequest();
  }, []);

  const fetchMore = () => {
    apiRequest();
  };

  return {
    isLoading, error, apiReturned, fetchMore, isApiRequestCanceled,
  };
}
