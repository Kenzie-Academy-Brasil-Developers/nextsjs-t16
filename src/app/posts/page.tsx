import Card from "@/components/Card";
import { api } from "@/services/api";

interface IPost {
  id: number;
  title: string;
  description: string;
  content: string[];
}

async function getPosts() {
  try {
    const response = await api.get<IPost[]>("posts");

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed");
  }
}

export default async function PostPage() {
  const posts = await getPosts();

  return (
    <main>
      <ul>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </ul>
    </main>
  );
}
