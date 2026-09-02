export type PostItem = {
  id: number;
  title: string;
  body: string;
};

export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> {
const promises: Promise<PostItem>[] = [];

  for (let i = 0; i < postIds.length; i++) {
    const id = postIds[i];
    const promise = fetch("https://jsonplaceholder.typicode.com/posts/" + id).then(
      function (response) {
        return response.json() as Promise<PostItem>;
      },
    );
    promises.push(promise);
  }

  const results = await Promise.all(promises);
  return results;
}
