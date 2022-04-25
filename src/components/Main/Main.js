import React from "react";
import CartoonMovie from "components/Main/CartoonMovie";
import CinemaMovie from "components/Main/CinemaMovie";
import OddMovie from "components/Main/OddMovie";
import SeriesMovie from "components/Main/SeriesMovie";
class Main extends React.Component {
    render() {
        
        let listAllMovie = this.props.dataAllMovie.listAllMovie
        return (
            <>
                <OddMovie listMovie={listAllMovie.phimle} />
                <SeriesMovie listMovie={listAllMovie.phimbo} />
                <CartoonMovie listMovie={listAllMovie.phimhoathinh} />
                <CinemaMovie listMovie={listAllMovie.phimchieurap} />
            </>
        )
    }
}
export default Main;