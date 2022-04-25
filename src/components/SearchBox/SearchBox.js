import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./search-box.scss"
import { withRouter } from "react-router-dom";
import axios from "axios";
toast.configure()
class SearchBox extends React.Component {

    state =
        {
            nameMovie: ""
        }

    checkInvalidInput = (string) => {
        if (string.length <= 1) {
            toast.error('Độ dài phải lớn hơn 1 kí tự!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            this.props.history.push({ pathname: `/movie-app/search`, search: `?keyword=${string}` })
        }
    }

    handleOnChangeInput = (e) => {
        this.setState(
            {
                nameMovie: e.target.value
            }
        )
    }

    handleSearchBox = (e) => {
        this.checkInvalidInput(this.state.nameMovie);
        e.preventDefault();
    }
    render() {
        return (
            <>
                <form className="search-box">
                    <input className="search-box__input--text" placeholder="Nhập tên phim hoặc thể loại cần tìm kiếm"
                        type="text" onChange={(e) => this.handleOnChangeInput(e)}
                    >

                    </input>
                    <input className="search-box__input--submit" type="submit" value="Tìm kiếm"
                        onClick={(e) => this.handleSearchBox(e)}
                    >
                    </input>
                </form>
            </>
        )
    }
}
export default withRouter(SearchBox);