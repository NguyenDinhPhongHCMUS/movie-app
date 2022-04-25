import React from "react";
import logo from "assets/images/logo.png"
import "./Header.scss"
import classNames from "classnames";
import { FaBars } from "react-icons/fa"
import { FaWindowClose } from "react-icons/fa"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { withRouter } from "react-router-dom";
class Header extends React.Component {
    state =
        {
            tabletActive: false
        }

    setTabletActive = () => {
        this.setState(
            {
                tabletActive: !this.state.tabletActive
            }
        )
    }

    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header-main">
                        <div className="header-main__img">
                            <Link to="/movie-app" onClick={() => {
                                this.props.history.push("/movie-app");
                                window.location.reload(false)
                            }}>
                                <img src={logo}></img>
                            </Link>
                        </div>
                        <div className="header-main__nav--lap">
                            <nav>
                                <NavLink
                                    activeClassName="tab-active"
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="header-main__nav--lap__title"
                                    to="/movie-app" exact={true}
                                >Trang chủ
                                </NavLink>

                                <NavLink
                                    activeClassName="tab-active"
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="header-main__nav--lap__title"
                                    to="/movie-app/the-loai/phim-le"
                                >Phim lẻ
                                </NavLink>

                                <NavLink
                                    activeClassName="tab-active"
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="header-main__nav--lap__title"
                                    to="/movie-app/the-loai/phim-bo"
                                >Phim bộ
                                </NavLink>

                                <NavLink
                                    activeClassName="tab-active"
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="header-main__nav--lap__title"
                                    to="/movie-app/the-loai/phim-hoat-hinh"
                                >Phim hoạt hình
                                </NavLink>

                                <NavLink
                                    activeClassName="tab-active"
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="header-main__nav--lap__title"
                                    to="/movie-app/the-loai/phim-chieu-rap"
                                >Phim chiếu rạp
                                </NavLink>
                            </nav>
                        </div>

                        <FaBars className="header-main__navbar" onClick={() => this.setTabletActive()} />
                    </div>
                    <div className={classNames("header-main__nav--tablet",
                        { 'nav-bar-tablet': this.state.tabletActive })}>
                        <div className="header-main__nav--tablet__navbar"
                            onClick={() => this.setTabletActive()}>
                            <FaWindowClose className="header-main__nav--tablet__navbar--icon" />
                        </div>
                        <nav>
                            <NavLink
                                activeClassName="tab-active"
                                onClick={() => window.scrollTo(0, 0)}
                                className="header-main__nav--tablet__title"
                                to="/movie-app" exact={true}
                            >Trang chủ
                            </NavLink>

                            <NavLink
                                activeClassName="tab-active"
                                onClick={() => window.scrollTo(0, 0)}
                                className="header-main__nav--tablet__title"
                                to="/movie-app/the-loai/phim-le"
                            >Phim lẻ
                            </NavLink>

                            <NavLink
                                activeClassName="tab-active"
                                onClick={() => window.scrollTo(0, 0)}
                                className="header-main__nav--tablet__title"
                                to="/movie-app/the-loai/phim-bo"
                            >Phim bộ
                            </NavLink>

                            <NavLink
                                activeClassName="tab-active"
                                onClick={() => window.scrollTo(0, 0)}
                                className="header-main__nav--tablet__title"
                                to="/movie-app/the-loai/phim-hoat-hinh"
                            >Phim hoạt hình
                            </NavLink>

                            <NavLink
                                activeClassName="tab-active"
                                onClick={() => window.scrollTo(0, 0)}
                                className="header-main__nav--tablet__title"
                                to="/movie-app/the-loai/phim-chieu-rap"
                            >Phim chiếu rạp
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);