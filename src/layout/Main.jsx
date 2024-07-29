import React from 'react';
import {Movies} from "../components/Movies";
import {Search} from "../components/Search";
import {Preloader} from "../components/Preloader";


class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=4f2bfd21&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))

    }

    render() {
        const {movies} = this.state;

        return <main className='container content'>
            <Search />
            {
                movies.length ? (
                    <Movies movies={this.state.movies}/>
                ) : <Preloader/>
            }
        </main>
    }
}

export {Main}