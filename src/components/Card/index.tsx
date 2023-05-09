import { IPost } from "@/app/posts/page";
import Link from "next/link";
import styles from './styles.module.scss';

interface ICardProps {
  post: IPost;
  color: 'first' | 'second'
}

export default function Card({ post, color }: ICardProps) {
  return (
    <li className={styles.container} data-color={color}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Link href={`/posts/${post.id}`}>Acessar</Link> {/* posts/3 */}
    </li>
  );
}
