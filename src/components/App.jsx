import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import MoviesLayout from './MoviesLayout/MoviesLayout';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import('../views/Home/Home'))
const MoviesSearchView = lazy(() => import('../views/MoviesSearchForm/MoviesSearchView'))
const MovieDetailsView = lazy(() => import('../views/MovieDetails/MovieDetailsView'))
const MovieCastView = lazy(() => import('../views/MovieDetails/MovieCastView'))
const MovieReviewsView = lazy(() => import('../views/MovieDetails/MovieReviewsView'))
const TVshowsView = lazy(() => import('../views/TVshows/TVshowsView'))
const TVshowDetailsView = lazy(() => import('../views/TVshowDetails/TVshowDetailsView'))
const TVshowCastView = lazy(() => import('../views/TVshowDetails/TVshowCastView'))
const TVshowReviewsView = lazy(() => import('../views/TVshowDetails/TVshowReviewsView'))

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MoviesLayout />}>
          <Route index element={<Home />} />

          <Route path="tv" element={<TVshowsView />} />
          <Route path="tv/:showId" element={<TVshowDetailsView />}>
            <Route path="cast" element={<TVshowCastView />} />
            <Route path="reviews" element={<TVshowReviewsView />} />
          </Route>

          <Route path="movies" element={<MoviesSearchView />} />
          <Route path="movies/:movieId" element={<MovieDetailsView />}>
            <Route path="cast" element={<MovieCastView />} />
            <Route path="reviews" element={<MovieReviewsView />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
