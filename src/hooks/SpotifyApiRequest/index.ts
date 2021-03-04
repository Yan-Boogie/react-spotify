/* eslint-disable no-console */
import {
  useState,
  useEffect,
  useContext,
  useRef,
} from 'react';
import { UserTokenContext } from '../context';

/**
 * @todo
 * 1. fetchMore feature
 * 2. Spotify playback error type
 */

type Error = Readonly<{
  message: string;
  status: number;
}>;

type RequestMethod = 'GET' | 'PUT';

export default function useSpotifyApiRequest({
  requestUrl,
  requestMethod,
  limit = 10,
  offset = 0,
}: {
  requestUrl: string,
  requestMethod: RequestMethod,
  limit?: number,
  offset?: number,
}) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const [apiReturned, setApiReturned] = useState<null | unknown>(null);
  const [currentOffset, setCurrentOffset] = useState(offset);
  const token = useContext(UserTokenContext);
  const isApiRequestCanceled = useRef(false);

  const apiRequest = async () => {
    setLoading(true);

    try {
      await fetch(`${requestUrl}?offset=${currentOffset}&limit=${limit}`, {
        method: requestMethod,
        headers: new Headers({
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        }),
      }).then((res) => res.json()).then((response) => {
        console.log('canceled', isApiRequestCanceled.current);

        if (!isApiRequestCanceled.current) {
          setApiReturned(response);
          setCurrentOffset((prevOffset) => prevOffset + limit);
        }
      });
    } catch (e) {
      setError(e);
    }

    setLoading(false);
  };

  useEffect(() => {
    apiRequest();

    return () => {
      isApiRequestCanceled.current = true;
    };
  }, []);

  const fetchMore = () => {
    isApiRequestCanceled.current = true;

    apiRequest();
  };

  return {
    isLoading, error, apiReturned, fetchMore,
  };
}
