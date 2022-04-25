import React from "react";
import "./movie-result-card.scss"
import { withRouter } from "react-router-dom";
class MovieResultCard extends React.Component {

    render() {
        let movie = this.props.movieResult
        return (
            <>
                <div className="movie-result-card">
                    <div style={{ backgroundImage: 'url(' + movie.imageUrl + ')' }}
                        className="movie-result-card__img">
                    </div>
                    <div className="movie-result-card__detail">
                        <p className="movie-result-card__detail__title">{movie.title}</p>
                        <p className="movie-result-card__detail__category">Thể loại: {movie.category}</p>
                        <p className="movie-result-card__detail__episode">Số tập: {movie.episode.length}</p>
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(MovieResultCard);