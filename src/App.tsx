import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { Genre, Movie } from './utils/models';
import { api } from './services/api';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

  useEffect(() => {
    api.get<Genre[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<Movie[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<Genre>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    });
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <SideBar
          genres={genres}
          handleClickButton={handleClickButton}
          selectedGenreId={selectedGenreId}
        />
      </nav>

      <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <Content movies={movies} />
        </main>
      </div>
    </div>
  );
}
