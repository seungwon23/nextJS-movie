"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/similar.module.css";

interface ISimilars {
  title: string;
  id: string;
  poster_path: string;
}

export default function Similar({ id, title, poster_path }: ISimilars) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.similar}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
