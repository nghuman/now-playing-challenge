import React from 'react';
import MovieListItem from './movie_list_item'

const MovieList = (props) => {

  const movieItems = props.movies.map((item) => {
    return (
      <MovieListItem
      onMovieSelect={props.onMovieSelect}
      key={item.id}
      movie={item} />
    );
  });

  return (
    <ul>{movieItems}</ul>
  )
}

export default MovieList;
