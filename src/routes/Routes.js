import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import OddMovie from "components/Main/OddMovie";
import CartoonMovie from "components/Main/CartoonMovie";
import CinemaMovie from "components/Main/CinemaMovie";
import Main from "components/Main/Main";
import SeriesMovie from "components/Main/SeriesMovie";
import WatchMovie from "pages/WatchMovie/WatchMovie";
import MovieSearchResult from "pages/MovieSearchResult/MovieSearchResult";
class Routes extends React.Component {
    render() {
        let dataAllMovie = this.props.dataAllMovie
        return (
            <Switch>
                <Route path="/movie-app" exact={true}>
                    <Main dataAllMovie={dataAllMovie} />
                </Route>
                <Route path="/movie-app/the-loai/phim-le">
                    <OddMovie listMovie={dataAllMovie.listAllMovie.phimle} />
                </Route>
                <Route path="/movie-app/the-loai/phim-bo">
                    <SeriesMovie listMovie={dataAllMovie.listAllMovie.phimbo} />
                </Route>
                <Route path="/movie-app/the-loai/phim-hoat-hinh">
                    <CartoonMovie listMovie={dataAllMovie.listAllMovie.phimhoathinh} />
                </Route>
                <Route path="/movie-app/the-loai/phim-chieu-rap">
                    <CinemaMovie listMovie={dataAllMovie.listAllMovie.phimchieurap} />
                </Route>
                <Route path="/movie-app/phim/:title">
                    <WatchMovie dataAllMovie={dataAllMovie} />
                </Route>
                <Route path="/movie-app/search">
                    <MovieSearchResult />
                </Route>
            </Switch>
        );
    }
}
export default Routes;