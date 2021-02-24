declare type RequestMethod = 'GET' | 'PUT';
export default function useSpotifyApiRequest({ requestUrl, requestMethod, }: {
    requestUrl: string;
    requestMethod: RequestMethod;
}): {
    isLoading: boolean;
    error: Readonly<{
        message: string;
        status: number;
    }> | null;
    apiReturned: unknown;
};
export {};
