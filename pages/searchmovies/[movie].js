import { useState } from "react";
import { MdHome, MdLocalMovies } from "react-icons/md";

import { connectToDatabase } from "../../lib/mongodb";
import { useRouter } from "next/router";

import {
  MovieContainer,
  Top,
  Image,
  MovieContent,
  MainContent,
  Links,
  ContainerLinks,
  Link,
  InfoContainer,
} from "../../styles/movie-styles";

export default function Movie({ movies }) {
  const router = useRouter();
  const { movie } = router.query;

  let moviesSla = {};

  movies.forEach((Smovie) => {
    if (Smovie._id == movie) {
      return (moviesSla = Smovie);
    }
  });

  function readMore() {
    if (plotMovie == moviesSla.plot) {
      setPlotMovie(moviesSla.fullplot);
    } else {
      setPlotMovie(moviesSla.plot);
    }
  }

  function timeConvert(n) {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return `${rhours}:${rminutes}`;
  }

  const [plotMovie, setPlotMovie] = useState(moviesSla.plot);

  return (
    <MovieContainer>
      <Top>
        <h1>{moviesSla.title}</h1>
        <Image src={moviesSla.poster} alt={moviesSla.title} />
      </Top>
      <MovieContent>
        <Links>
          <p>
            Movies {">"} {moviesSla.title}
          </p>
          <ContainerLinks>
            <Link href="/">
              <MdHome />
              Home
            </Link>
            <Link href="/movies">
              {" "}
              <MdLocalMovies /> Movies
            </Link>
          </ContainerLinks>
        </Links>
        <MainContent>
          <h2>Year: {moviesSla.year}</h2>
          <p id="plot">
            Plot: {plotMovie}
            {moviesSla.fullplot && (
              <button onClick={readMore}>
                {" "}
                {plotMovie == moviesSla.plot ? "View More" : "View Less"}{" "}
              </button>
            )}
          </p>
          <p>
            Runtime: {timeConvert(moviesSla.runtime)} ({moviesSla.runtime}{" "}
            minutes)
          </p>
          <InfoContainer>
            <div>
              <p>Genres:</p>
              <ul>
                {moviesSla.genres.map((genre) => (
                  <li>{genre}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>Cast:</p>
              <ul>
                {moviesSla.cast.map((actor) => (
                  <li>{actor}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>Directors:</p>
              <ul>
                {moviesSla.directors.map((director) => (
                  <li>{director}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>Writers:</p>
              <ul>
                {moviesSla.writers.map((writer) => (
                  <li>{writer}</li>
                ))}
              </ul>
            </div>
          </InfoContainer>
          <h2 id="awards">Awards</h2>
          <p>{moviesSla.awards.text}</p>
          <p>Nominations: {moviesSla.awards.nominations}</p>
          <p>Wins: {moviesSla.awards.wins}</p>
        </MainContent>
      </MovieContent>
      <footer>
        <h6>
          {" "}
          Developed by <a href="/">Guilherme Lima</a>{" "}
        </h6>
      </footer>
    </MovieContainer>
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
