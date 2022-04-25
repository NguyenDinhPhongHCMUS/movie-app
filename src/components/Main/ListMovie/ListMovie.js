import MovieCard from "components/MovieCard/MovieCard";
import React from "react";
import "components/Main/ListMovie/list-movie.scss"
import { withRouter } from "react-router-dom";
class ListMovie extends React.Component {

    handleClickMovie = (movie) => {
        window.scrollTo(0, 0)
        this.props.history.push(`/movie-app/phim/${movie.title}`)
    }
    render() {
        let listMovie = this.props.listMovie
        return (
            <>
                <div className="movie">
                    <div className="container">
                        <div className="movie-main">
                            <h1 className="movie-main__title">{this.props.title}</h1>
                            <div className="movie-main__grid">
                                {
                                    listMovie.filter((movie, index) => index < 20).map((movie, index) =>
                                        <div 
                                            className="movie-main__grid__item" key={index}>
                                            <MovieCard movie={movie}  handleClickMovie={this.handleClickMovie} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(ListMovie);