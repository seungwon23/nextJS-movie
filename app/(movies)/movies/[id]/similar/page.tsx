import { API_URL } from "../../../../(home)/page";
import Similar from "../../../../../components/similar";
import styles from "../../../../../styles/home.module.css"

interface IParams {
  params: { id: string };
}

async function getSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function similarPage({ params: { id } }: IParams) {
  const similars = await getSimilar(id);
  return (
    <div className={styles.container}>
      {similars.map((similar) => (
        <Similar
          key={similar.id}
          id={similar.id}
          poster_path={similar.poster_path}
          title={similar.title}
        />
      ))}
    </div>
  );
}
