import styles from "../styles/credit.module.css";

interface ICredit {
  name: string;
  character: string;
  profile_path: string;
}

export default function Credit({ name, character, profile_path }: ICredit) {
  return (
    <div className={styles.credit}>
      <img src={profile_path} alt={name} />
      <ul>
        <li>
          name: {name}
        </li>
        <li>character: {character}</li>
      </ul>
    </div>
  );
}
