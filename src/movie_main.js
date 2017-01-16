import React, {Component} from 'react';
import $ from 'jquery';
import MovieList from './movie_list';
import MovieDetail from './movie_detail';


class MovieMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      selectedMovie: null,
    };
  }

  componentDidMount() {
    this.NowPlaying();
  }

  NowPlaying() {
    return $.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=306bd1f9dda87b11475c98f9d47e3862&language=en-US")
      .then((data) => {
        this.setState({ movies: data.results });
        console.log(data.results);
      });
  }

  render() {
    return (<div>
      <h1>Now Playing In Theatres</h1>
      <MovieDetail movie={this.state.selectedMovie}/>
      <MovieList
          onMovieSelect={selectedMovie => this.setState({selectedMovie})}
          movies={this.state.movies} />
      </div>
    );
  }
}

export default MovieMain;
