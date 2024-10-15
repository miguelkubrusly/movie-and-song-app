import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, AppDispatch, Movie, removeSong, Song } from "../store";
import { Dispatch } from "react";

type SongState = {
  songs: string[];
};

function SongPlaylist() {
  const dispatch: Dispatch<AppDispatch> = useDispatch();
  const songPlaylist: string[] = useSelector(
    (state: SongState) => state!.songs
  );

  const handleSongAdd = (song: Song) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song: Song) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
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
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
