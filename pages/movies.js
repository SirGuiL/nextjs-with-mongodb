import { connectToDatabase } from "../lib/mongodb";
import { MoviesContainer, Image, Ul, Box } from "../styles/styles";

export default function Movies({ movies }) {
  return (
    <MoviesContainer>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <Ul>
        {movies.map((movie) => (
          <Box>
            <a href={`/searchmovies/${movie._id}`}>
              <Image
                src={
                  movie.poster ||
                  "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"
                }
                alt={movie.title}
              />
            </a>
            <div>
              <h4>{movie.title}</h4>
              <p>
                {movie.type} &bull; {movie.year}
              </p>
              <p>metacritic: {movie.metacritic}</p>
            </div>
          </Box>
        ))}
      </Ul>
    </MoviesContainer>
  );
}

export async function getServerSideProps() {
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
