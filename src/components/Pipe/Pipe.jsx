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

    componentDidUpdate() {
        let animePath = anime.path('.Pipe path');

        anime({
            autoplay: true,
            targets: '.Pipe circle',
            translateX: animePath('x'),
            translateY: animePath('y'),
            rotate: animePath('angle'),
            easing: 'linear',
            direction: 'normal',
            duration: 3000,
            loop: true
        });
    }

    render() {
        return (
            <g className="Pipe" transform={"translate(" + this.props.left + " " + this.props.top + ")"}>
                <circle
                    fill={'black'}
                    r="5" cx="0"  cy="0"
                />
                <path
                    style={{
                        fill: "none",
                        stroke: this.props.active ? this.getColor() : 'gray',
                        strokeWidth: "4.75"
                    }}
                    d={this.props.d}
                />
            </g>
        )
    }
}

export { Pipe }

Pipe.propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
    active: PropTypes.bool,
    activeColor: PropTypes.string,
    d: PropTypes.string,
};

Pipe.defaultProps = {
    left: 0,
    top: 0,
    active: false,
    activeColor: '',
    d: '',
};