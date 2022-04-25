import React from "react";
import "./movie-card.scss"
import { FaTag } from "react-icons/fa"
import { withRouter } from "react-router-dom";
class MovieCard extends React.Component {

    handleClickMovie(movie) {
        this.props.handleClickMovie(movie)
    }

    render() {
        let movie = this.props.movie
        let isEmpty = movie === null
        return (
            <>
                {
                    isEmpty === false &&
                    <div className="movie-card">
                        <div style={{ backgroundImage: 'url(' + movie.imageUrl + ')' }}
                            className="movie-card__img"
                            onClick={() => this.handleClickMovie(movie)}
                        >
                        </div>
                        <div className="movie-card__title">
                            <p className="movie-card__title__content"
                                onClick={() => this.handleClickMovie(movie)}
                            >
                                {movie.title}
                            </p>
                        </div>
                        <div className="movie-card__category">
                            <FaTag className="movie-card__category__icon" />
                            <p className="movie-card__category__content"
                                onClick={() => this.props.history.push({ pathname: `/movie-app/search`, search: `?keyword=${movie.category}` })}
                            >{movie.category}</p>
                        </div>
                    </div>
                }

            </>
        )
    }
}
export default withRouter(MovieCard);