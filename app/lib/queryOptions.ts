export const queryOptions = {
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
};
