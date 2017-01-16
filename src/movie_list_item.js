import React from 'react';

const MovieListItem = ({movie, onMovieSelect}) => {
  return (
    <ul onClick={() => onMovieSelect(movie)}>
      <div>
      {movie.title}
      </div>
    </ul>
  );
};

export default MovieListItem;
