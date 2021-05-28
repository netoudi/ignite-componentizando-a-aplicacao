import { Button } from './Button';
import { Genre } from '../utils/models';

type SideBarProps = {
  genres: Genre[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({ genres, handleClickButton, selectedGenreId }: SideBarProps) {
  return (
    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  );
}
