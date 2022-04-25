import React from "react";
import "./watch-movie.scss"
import { FaTag } from "react-icons/fa"
import Ratio from "react-ratio";
import { withRouter } from "react-router-dom";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import { FaHome } from "react-icons/fa"
import EpisodeButton from "components/EpisodeButton/EpisodeButton";
import classNames from "classnames";
import axios from "axios";
class WatchMovie extends React.Component {
    state =
        {
            movie: [
                {
                    episode: [],
                    title: "",
                    category: "",
                }
            ],
            currentEpisode: 0
        }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let title = this.props.match.params.title;
            let res = await axios.get(`https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2i7iHXgh6SHsXFEw_Fwh1nzsGNBOJPQBRLjihYwyjfpsZ-bJnJ3leGUos`)
            let dataMovies = res && res.data && res.data.phim ? res.data.phim : {}
            let movieResultSeries = dataMovies["phimbo"].filter(movie => movie.title.trim() === title.trim())
            let movieResultOdd = dataMovies["phimle"].filter(movie => movie.title.trim() === title.trim())
            let movieResultCartoon = dataMovies["phimhoathinh"].filter(movie => movie.title.trim() === title.trim())
            let movieResultCinema = dataMovies["phimchieurap"].filter(movie => movie.title.trim() === title.trim())
            if (movieResultSeries.length > 0)
                this.setState(
                    {
                        movie: movieResultSeries[0]
                    }
                )
            if (movieResultOdd.length > 0) {

                this.setState(
                    {
                        movie: movieResultOdd[0]
                    }
                )
            }
            if (movieResultCartoon.length > 0)
                this.setState(
                    {
                        movie: movieResultCartoon[0]
                    }
                )
            if (movieResultCinema.length > 0)
                this.setState(
                    {
                        movie: movieResultCinema[0]
                    }
                )

        }
    }
    handleChangeCurrentEpisode = (index) => {
        this.setState(
            {
                currentEpisode: index
            }
        )
    }
    backHome = () => {
        this.props.history.push("/movie-app");
        window.scrollTo(0, 0)
    }
    render() {
        let movies = this.state.movie
        let currentEpisode = this.state.currentEpisode
        return (
            <>
                {movies && movies.episode && movies.episode.length > 0 ?
                    <div className="container">
                        <div className="detail-movie">
                            <Ratio ratio={2 / 3} style={{ backgroundImage: 'url(' + movies.imageUrl + ')' }}
                                className="detail-movie__img">
                            </Ratio>
                            <div className="detail-movie__info">
                                <div className="detail-movie__info__content">
                                    {
                                        movies.episode.length === currentEpisode + 1 &&
                                        movies.episode.length >= 2 &&
                                        <p className="detail-movie__info__content__title">
                                            {movies.title} - Tập cuối
                                        </p>
                                    }

                                    {
                                        movies.episode.length !== currentEpisode + 1 &&
                                        movies.episode.length >= 2 &&
                                        <p className="detail-movie__info__content__title">
                                            {movies.title} - Tập {currentEpisode + 1}
                                        </p>
                                    }
                                    {
                                        movies.episode.length === 1 &&
                                        <p className="detail-movie__info__content__title">{movies.title}</p>
                                    }
                                    <div className="detail-movie__info__content__category">
                                        <FaTag className="detail-movie__info__content__category__icon" />
                                        <p className="detail-movie__info__content__category__title"
                                            onClick={() => { this.props.history.push({ pathname: `/movie-app/search`, search: `?keyword=${movies.category}` }) }}
                                        >
                                            {movies.category}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="movie-video">
                            <iframe className="movie-video__iframe"
                                src={movies.episode[currentEpisode].url}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; 
                                encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                        {
                            movies.episode.length >= 2 &&
                            <div className="movie-episodes">
                                <h3 className="movie-episodes__title">Chọn tập phim</h3>
                                <div className="movie-episodes__list">
                                    {
                                        movies.episode.map((item, index) =>

                                            <div
                                                className={classNames('movie-episodes__list__item',
                                                    { 'current-episode-active': currentEpisode === index })}
                                                onClick={() => this.handleChangeCurrentEpisode(index)}>
                                                <EpisodeButton
                                                    key={index}
                                                    currentEpisode={index + 1}>
                                                </EpisodeButton>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        }
                        <div onClick={() => this.backHome()} className="home-back">
                            <FaHome className="home-back__icon" />
                            <p>Trang chủ</p>
                        </div>
                    </div>
                    :
                    <LoadingSpinner />

                }
            </>

        )
    }
}
export default withRouter(WatchMovie);