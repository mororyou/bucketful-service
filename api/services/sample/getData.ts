export async function getData(): Promise<
  {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[]
> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await res.json();
}
