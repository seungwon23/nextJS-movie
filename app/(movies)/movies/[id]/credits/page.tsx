import Credit from "../../../../../components/credit";

interface IParams {
  params: { id: string };
}

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function creditPage({ params: { id } }: IParams) {
  const credits = await getCredits(id);
  return (
    <div>
      <h1>Credits</h1>
      {credits.map((credit) => (
        <Credit
          key={credit.id}
          name={credit.name}
          character={credit.character}
          profile_path={credit.profile_path}
        />
      ))}
    </div>
  );
}
