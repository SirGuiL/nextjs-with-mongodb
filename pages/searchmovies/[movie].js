import { connectToDatabase } from "../../lib/mongodb";
import { useRouter } from "next/router";

export default function Movie({ movies }) {
  const router = useRouter();
  const { movie } = router.query;

  let moviesSla = {};

  movies.forEach((Smovie) => {
    if (Smovie._id == movie) {
      return (moviesSla = Smovie);
    }
  });

  return (
    <div>
      <h1>{moviesSla.title}</h1>
      <p>{moviesSla.year}</p>
      <ul>
        {moviesSla.genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
      <p>{moviesSla.runtime}</p>
      <h4>Cast</h4>
      <ul>
        {moviesSla.cast.map((actor) => (
          <li>{actor}</li>
        ))}
      </ul>
      <h4>Quantity Comments</h4>
      <p>{moviesSla.num_mflix_comments}</p>
      <h4>Poster</h4>
      <p>{moviesSla.poster}</p>
      <h4>Plot</h4>
      <p>{moviesSla.plot}</p>
      <h4>Full Plot</h4>
      <p>{moviesSla.fullplot}</p>
      <h4>Languages</h4>
      <ul>
        {moviesSla.languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <h4>Writers</h4>
      {moviesSla.writers.map((writer) => (
        <li>{writer}</li>
      ))}
      <h4>Type</h4>
      <p>{moviesSla.type}</p>
      <h4>release date</h4>
      <p>{moviesSla.released}</p>
      <h4>Awards</h4>
      <p>Wins: {moviesSla.awards.wins}</p>
      <p>Nominations: {moviesSla.awards.nominations}</p>
      <p>text: {moviesSla.awards.text}</p>
      <h4>Countries</h4>
      <ul>
        {moviesSla.countries.map((country) => (
          <li>{country}</li>
        ))}
      </ul>
      <h4>Directors</h4>
      <ul>
        {moviesSla.directors.map((director) => (
          <li>{director}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}
