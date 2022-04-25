import React from "react";
import "./Footer.scss"
import { FaFacebookSquare } from "react-icons/fa"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer__type">
                        <Link onClick={() => window.scrollTo(0, 0)} className="footer__type__title"
                            to="/movie-app/the-loai/phim-le"
                        >Phim lẻ
                        </Link>

                        <Link onClick={() => window.scrollTo(0, 0)} className="footer__type__title"
                            to="/movie-app/the-loai/phim-bo"
                        >
                            Phim bộ
                        </Link>

                        <Link onClick={() => window.scrollTo(0, 0)} className="footer__type__title"
                            to="/movie-app/the-loai/phim-hoat-hinh"
                        >Phim hoạt hình
                        </Link>
                        <Link onClick={() => window.scrollTo(0, 0)} className="footer__type__title"
                            to="/movie-app/the-loai/phim-chieu-rap"
                        >Phim chiếu rạp
                        </Link>
                    </div>
                    <div className="footer__about-me">
                        <div className="footer__about-me__fb">
                            <FaFacebookSquare className="footer__about-me__fb__icon" />
                            <a href="https://facebook.com/dinhphong0812" className="footer__about-me__fb__title">Facebook</a>
                        </div>
                        <div className="footer__about-me__title">
                            <div className="footer__about-me__title__icon"></div>
                            <p className="footer__about-me__title__content">2022 Created By Nguyễn Đình Phong</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;