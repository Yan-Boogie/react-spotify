import {
  useState,
  useEffect,
  useContext,
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
}: {
  requestUrl: string,
  requestMethod: RequestMethod,
}) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const [apiReturned, setApiReturned] = useState<null | unknown>(null);
  const token = useContext(UserTokenContext);

  useEffect(() => {
    let canceled = false;

    setLoading(true);

    try {
      fetch(requestUrl, {
        method: requestMethod,
        headers: new Headers({
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        }),
      }).then((response) => {
        if (!canceled) {
          setApiReturned(response.json());
          setLoading(false);
        }
      });
    } catch (e) {
      setLoading(false);
      setError(e);
    }

    return () => {
      canceled = true;
    };
  }, [requestUrl]);

  return { isLoading, error, apiReturned };
}
