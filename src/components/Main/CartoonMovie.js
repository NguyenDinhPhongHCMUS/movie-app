import MovieCard from "components/MovieCard/MovieCard";
import React from "react";
import axios from 'axios';
import ListMovie from "components/Main/ListMovie/ListMovie";
class CartoonMovie extends React.Component {
    state =
        {
            title: "Phim hoạt hình"
        }
    render() {
        return (
            <>
                <ListMovie title={this.state.title} listMovie={this.props.listMovie} />
            </>
        )
    }
}
export default CartoonMovie;