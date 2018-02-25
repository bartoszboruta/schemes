import React, {Component} from "react";
import PropTypes from 'prop-types';
import anime from 'animejs';

class Pipe extends Component {

    getColor() {
        switch (this.props.activeColor) {
            case 'hot':
                return 'red';
            case 'cold':
                return 'blue';
            default:
                return 'gray';
        }
    }

    componentDidMount() {
        const animeId = '#' + this.props.id;
        const animePath = anime.path(animeId + ' path');

        anime({
            autoplay: true,
            targets: animeId + ' circle',
            translateX: animePath('x'),
            translateY: animePath('y'),
            rotate: animePath('angle'),
            easing: 'linear',
            direction: 'normal',
            duration: 8000,
            loop: true
        });
    }

    render() {
        return (
            <g id={this.props.id} className="Pipe" transform={"translate(" + this.props.left + " " + this.props.top + ")"}>
                <circle
                    fill={'black'}
                    r="5" cx="0"  cy="0"
                />
                <path
                    style={{
                        fill: "none",
                        stroke: this.props.active ? this.getColor() : 'gray',
                        strokeWidth: this.props.strokeWidth
                    }}
                    d={this.props.d}
                />
            </g>
        )
    }
}

export { Pipe }

Pipe.propTypes = {
    active: PropTypes.bool,
    activeColor: PropTypes.string,
    d: PropTypes.string,
    left: PropTypes.number,
    strokeWidth: PropTypes.number,
    top: PropTypes.number,
};

Pipe.defaultProps = {
    active: false,
    activeColor: '',
    d: '',
    left: 0,
    strokeWidth: 3,
    top: 0,
};