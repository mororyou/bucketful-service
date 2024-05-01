import { useMatches } from '@remix-run/react';
import type { DehydratedState } from '@tanstack/react-query';

export function useDehydratedState() {
  const matches = useMatches();
  return (
    matches
      // @ts-expect-error in all cases the following check will resolve to
      // undefined if the property isn't available on `data`
      .flatMap(({ data }) => (data?.dehydratedState as DehydratedState) ?? [])
      .reduce<DehydratedState>(
        (result, current) => ({
          queries: [...result.queries, ...current.queries],
          mutations: [...result.mutations, ...current.mutations],
        }),
        { queries: [], mutations: [] },
      )
  );
}
