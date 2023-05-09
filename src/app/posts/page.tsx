import Card from "@/components/Card"; // alias
import { api } from "@/services/api";
import styles from "./styles.module.scss";

export interface IPost {
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
      <ul className={styles.container}>
        {posts.map((post, index) => {
          const color = index % 2 ? "first" : "second";
          return <Card key={post.id} post={post} color={color} />;
        })}
      </ul>
    </main>
  );
}
