import Link from "next/link";
import styles from "../styles/movie-info.module.css";

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export async function getMovie(id: string) {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <Link href={`${id}/credits`}>credits &rarr;</Link>
        <Link href={`${id}/similar`}>similar movies &rarr;</Link>
        <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
      </div>
    </div>
  );
}
