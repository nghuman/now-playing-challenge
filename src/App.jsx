import React, {Component} from 'react';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {movies: []};
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
    const movie = this.state.movies.map((item) => {
      return <div>
          {item.title}
      </div>
    });

    return (<div>
      <h1>Now Playing In Theatres</h1>
      <h2>{movie}</h2>
      </div>
    );
  }
}
export default App;
