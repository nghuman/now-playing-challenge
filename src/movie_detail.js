import React from "react";

const MovieDetail = ({movie}) => {
  if (!movie) {
    return <div>Select A Movie To Find Out More</div>
  }

  return (
    <div>
      <div>
        <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
      </div>
      <div>
        <div className="detail" >{movie.title}</div>
      </div>
      <div>
        <div className="detail">{movie.overview}</div>
      </div>
      <div>
        <div className="detail">Movie Rating: {movie.vote_average}</div>
      </div>
    </div>
  );
};

export default MovieDetail;
