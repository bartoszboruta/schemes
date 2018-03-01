import React, {Component} from "react";
import PropTypes from 'prop-types';

class Pipe extends Component {

    getColor() {
        switch (this.props.active && this.props.activeColor) {
            case 'hot':
                return '#fd5757';
            case 'cold':
                return '#4444ea';
            default:
                return 'gray';
        }
    }

    render() {
        return (
            <g className="Pipe" transform={"translate(" + this.props.left + " " + this.props.top + ")"}>
                <path
                    style={{
                        fill: "none",
                        stroke: this.getColor(),
                        strokeWidth: this.props.strokeWidth
                    }}
                    id={ this.props.id }
                    d={ this.props.d }
                />
                {
                    this.props.active &&
                        <circle
                            fill={this.getColor()}
                            r="4" cx="0" cy="0">
                                <animateMotion
                                    dur="10s"
                                    rotate="auto"
                                    repeatCount="indefinite"
                                    keyPoints="1;0"
                                    keyTimes="0;1"
                                    calcMode="linear"
                                >
                                    <mpath xlinkHref={ '#' + this.props.id } />
                                </animateMotion>
                        </circle>
                }
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