import { json } from '@remix-run/react';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { getData } from '~api/services/sample/getData';

export async function loader() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryFn: () => getData(),
    queryKey: ['num'],
  });
  return json({ dehydratedState: dehydrate(queryClient) });
}

export default function Sample() {
  const { data, status, isError, isLoading, isFetching } = useQuery({
    queryFn: () => getData(),
    queryKey: ['num'],
    refetchInterval: 5000,
  });

  return (
    <div>
      Status:{status} / isError:{isError ? 'true' : 'false'} / isLoading:
      {isLoading ? 'true' : 'false'} / isFetching:
      {isFetching ? 'true' : 'false'}
      {status !== 'success' ? (
        <div>Fetching...</div>
      ) : (
        <ul>
          {data.map((post) => (
            <li
              style={{
                lineHeight: '2',
              }}
              key={post.id}
            >
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
