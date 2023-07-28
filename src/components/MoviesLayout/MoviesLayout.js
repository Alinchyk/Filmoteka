import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Header, Navigation, Link, Title } from './MoviesLayout.styled';

export default function MoviesLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <Navigation>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </Navigation>
        </nav>
        <Title>Filmoteka</Title>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
