import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  const duration = movie.runtime ? `${movie.runtime} min` : "N/A";
  const averageRating = movie.vote_average
    ? movie.vote_average.toFixed(1)
    : "N/A";

  return (
    <div className={s.container}>
      <Link to={backLink.current} className={s.backLink}>
        🔙 Back to Movies
      </Link>
      <div className={s.detailsWrapper}>
        <div className={s.imageWrapper}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
        </div>

        <div className={s.infoWrapper}>
          <h1 className={s.title}>{movie.title}</h1>
          <p className={s.overview}>{movie.overview}</p>

          <div className={s.stats}>
            <p>
              <strong>Duration:</strong> {duration}
            </p>
            <p>
              <strong>Average Rating:</strong> {averageRating} / 10
            </p>
          </div>

          <nav className={s.navLinks}>
            <Link to="cast" className={s.navLink}>
              Cast
            </Link>
            <Link to="reviews" className={s.navLink}>
              Reviews
            </Link>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
