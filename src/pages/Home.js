import Footer from "components/Footer/Footer";
import SearchBox from "components/SearchBox/SearchBox";
import React from "react";
import "./Home.scss"
import Header from "../components/Header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Routes from "routes/Routes";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
class Home extends React.Component {
    render() {
        let dataAllMovie = this.props.dataAllMovie
        return (
            <Router>
                <div className="home">
                    <div>
                        <Header />
                        <SearchBox dataAllMovie={dataAllMovie} />
                    </div>
                    {
                        dataAllMovie.isLoading ? <LoadingSpinner />
                            :
                            <>
                                <Routes dataAllMovie={dataAllMovie} />
                            </>
                    }
                    <Footer />
                </div>
            </Router>
        )
    }
}
export default Home;