import React from "react";
import { withRouter } from "react-router-dom";
import MovieResultCard from "components/MovieResultCard/MovieResultCard";
import "./movie-search-result.scss"
import queryString from 'query-string'
import axios from "axios";
import { toast } from "react-toastify";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
toast.configure()
class MovieSearchResult extends React.Component {

    state = {
        dataMovies: {},
        movieResult: [],
        keyword: "",
        isLoading: true
    }

    componentWillMount() {
        this.getData()
    }
    componentWillReceiveProps() {
        this.getData()
    }
    handleClickMovie = (movie) => {
        window.scrollTo(0, 0)
        this.props.history.push(`/movie-app/phim/${movie.title}`)
    }
    async getData() {
        this.setState(
            {
                dataMovies: [],
                isLoading: true
            }
        )
        let res = await axios.get(`https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2i7iHXgh6SHsXFEw_Fwh1nzsGNBOJPQBRLjihYwyjfpsZ-bJnJ3leGUos`)
        let dataMovies = res && res.data && res.data.phim ? res.data.phim : {}
        this.setState(
            {
                dataMovies: dataMovies,
                isLoading: false,
                keyword: queryString.parse(this.props.location.search).keyword
            }
        )
        this.searchMovie(queryString.parse(this.props.location.search).keyword)
    }

    nonAccentVietnamese = (str) => {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
        str = str.replace(/\u02C6|\u0306|\u031B/g, "");
        return str;
    }

    searchMovie = (nameMovie) => {
        let nonAccentNameMovie = this.nonAccentVietnamese(nameMovie)
        let movieResultSeries = this.state.dataMovies["phimbo"].filter(
            movie => this.nonAccentVietnamese(movie.title).includes(nonAccentNameMovie)
                || this.nonAccentVietnamese(movie.category).includes(nonAccentNameMovie))

        let movieResultOdd = this.state.dataMovies["phimle"].filter(
            movie => this.nonAccentVietnamese(movie.title).includes(nonAccentNameMovie)
                || this.nonAccentVietnamese(movie.category).includes(nonAccentNameMovie))

        let movieResultCartoon = this.state.dataMovies["phimhoathinh"].filter(
            movie => this.nonAccentVietnamese(movie.title).includes(nonAccentNameMovie)
                || this.nonAccentVietnamese(movie.category).includes(nonAccentNameMovie))

        let movieResultCinema = this.state.dataMovies["phimchieurap"].filter(
            movie => this.nonAccentVietnamese(movie.title).includes(nonAccentNameMovie)
                || this.nonAccentVietnamese(movie.category).includes(nonAccentNameMovie))

        let movieResult = []
        if (movieResultSeries.length > 0) {
            movieResult = [...movieResult, movieResultSeries]
        }

        if (movieResultOdd.length > 0) {
            movieResult = [...movieResult, movieResultOdd]
        }
        if (movieResultCartoon.length > 0) {
            movieResult = [...movieResult, movieResultCartoon]
        }

        if (movieResultCinema.length > 0) {
            movieResult = [...movieResult, movieResultCinema]
        }

        this.setState(
            {
                movieResult: movieResult
            }
        )
    }
    render() {
        let movieResult = this.state.movieResult
        return (
            <>
                <div className="movie-search-result">
                    {this.state.isLoading ?
                        <div className="container">
                            <LoadingSpinner />
                        </div>
                        :
                        <div className="container">
                            {
                                movieResult.length === 0 ?
                                    <h1 className="movie-search-result__title">Không tìm thấy kết quả cho "{this.state.keyword}"</h1>
                                    :
                                    <div>
                                        {
                                            movieResult.map(arrayChild => arrayChild.map((item, index) =>
                                                <div key={index} onClick={() => this.handleClickMovie(item)}>
                                                    <MovieResultCard movieResult={item} />
                                                </div>
                                            ))
                                        }
                                    </div>
                            }
                        </div>
                    }
                </div>
            </>
        )
    }
}
export default withRouter(MovieSearchResult);