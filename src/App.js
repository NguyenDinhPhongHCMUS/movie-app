import React from 'react';
import Home from './pages/Home';
import axios from 'axios';
class App extends React.Component {
    state = {
        listAllMovie: [],
        isLoading: true
    }
    componentDidMount() {
        axios.get(`https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2i7iHXgh6SHsXFEw_Fwh1nzsGNBOJPQBRLjihYwyjfpsZ-bJnJ3leGUos`)
            .then(res => {
                this.setState({
                    listAllMovie: res && res.data && res.data.phim ? res.data.phim : [],
                    isLoading: false
                });
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <>
                <div className="App">
                    <Home dataAllMovie={this.state} />
                </div>
            </>
        );
    }
}

export default App;
