import React from "react";
import "./episode-button.scss"
class EpisodeButton extends React.Component {
    render() {
        return (
            <div className="episode-button">
                {this.props.currentEpisode}
            </div>
        )
    }
}
export default EpisodeButton;