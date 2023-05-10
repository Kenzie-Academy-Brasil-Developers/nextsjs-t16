"use client";

import { IPost } from "@/app/posts/page";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useContext, useEffect, useRef } from "react";
import { TestContext } from "@/providers/TestContext";

interface ICardProps {
  post: IPost;
  color: "first" | "second";
}

export default function Card({ post, color }: ICardProps) {
  // const { teste } = useContext(TestContext);
  const liElement = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const liCurrent = liElement.current;

    if(!liCurrent) {
      return;
    }

    // 400
    // 15px
    // grid-row-end
    const sizeRow = liCurrent.offsetHeight / 10;
  
    // 32.89380384098324
    // 32
    const sizeRowFloor = Math.floor(sizeRow);

    liCurrent.style.gridRowEnd = `span ${sizeRowFloor}`

  }, [])

  return (
    <li ref={liElement} className={styles.container} data-color={color}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Link href={`/posts/${post.id}`}>Acessar</Link> {/* posts/3 */}
    </li>
  );
}
