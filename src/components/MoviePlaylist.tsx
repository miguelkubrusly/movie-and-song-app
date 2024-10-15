import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { addMovie, AppDispatch, Movie, removeMovie } from "../store";
import { Dispatch } from "react";

type MovieState = { movies: Movie[] };

function MoviePlaylist() {
  const dispatch: Dispatch<AppDispatch> = useDispatch();
  const moviePlaylist: Movie[] = useSelector(
    (state: MovieState) => state!.movies
  );

  const handleMovieAdd = (movie: Movie) => {
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie: Movie) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
