import React, {Component} from "react";
import PropTypes from 'prop-types';

class AutomaticBoiler extends Component {
    static getGradients() {
        return <defs>
            <linearGradient
                id="linearGradient3108"
                spreadMethod="pad"
                gradientTransform="matrix(6.46299,0,0,1.58797,152.2596,93.31)"
                gradientUnits="userSpaceOnUse"
                y2="0"
                x2="1"
                y1="0"
                x1="0">
                <stop
                    id="stop5798"
                    offset="0"
                    style={{stopOpacity:1, stopColor:"#c4c2c2"}} />
                <stop
                    id="stop5800"
                    offset="1"
                    style={{stopOpacity:1, stopColor:"#a0a0a0"}} />
            </linearGradient>
            <linearGradient
                id="linearGradient3106"
                spreadMethod="pad"
                gradientTransform="matrix(17.44101,0,0,28.8102,146.7706,90.3645)"
                gradientUnits="userSpaceOnUse"
                y2="0"
                x2="1"
                y1="0"
                x1="0">
                <stop
                    id="stop5764"
                    offset="0"
                    style={{stopOpacity:1, stopColor:"#ebecec"}} />
                <stop
                    id="stop5766"
                    offset="1"
                    style={{stopOpacity:1, stopColor:"#fefefe"}} />
            </linearGradient>
        </defs>
    }

    render() {
        return (
            <g id="furnace" transform={"translate(" + this.props.left + " " + this.props.top + ")"}>
                {
                    AutomaticBoiler.getGradients()
                }
                <g>
                    <path
                        d="m 68.70724,643.25316 28.298487,0 0,4.33487 -28.298487,0 0,-4.33487 z"
                        style={{fill:"#999999", fillOpacity:1, fillRule:"evenodd", stroke:"none"}}
                    />
                    <g transform="matrix(4.4237819,0,0,-4.4237819,-605.00291,1174.79)">
                        <path
                            d="m 146.7709,119.1745 17.4407,0 0,-28.81 -17.4407,0 0,28.81 z"
                            style={{fill:"url(#linearGradient3106)", fillOpacity:1, fillRule:"evenodd", stroke:"none"}}
                        />
                    </g>
                    <path
                        d="m 118.62962,647.58803 1.44171,0 0,127.44917 -1.44171,0 0,-127.44917 z"
                        style={{fill:"#c4c2c2", fillOpacity:1, fillRule:"evenodd", stroke:"none"}}
                    />
                    <path
                        d="m 45.000627,648.33166 1.441713,0 0,126.70554 -1.441713,0 0,-126.70554 z"
                        style={{fill:"#cccccc", fillOpacity:1, fillRule:"evenodd", stroke:"none"}}
                    />
                    <path
                        d="m 121.43474,774.31611 0,0.72196 0,0.71886 -76.434113,0 0,-1.44082 74.991953,0 0,-126.72675 1.44216,0 0,126.72675 z"
                        style={{fill:"#808080", fillOpacity:1, fillRule:"evenodd", stroke:"none"}}
                    />
                    <path
                        d="m 120.08415,772.95271 0,1.44214 -0.0132,0 -1.44171,0 -73.628975,0 0,-1.44214 73.628975,0 0,-123.92385 -73.628975,0 0,-1.4395 73.628975,0 1.36296,0 0.0787,0 0,125.36335 0.0132,0 z"
                        style={{fill:"#c4c2c2", fillOpacity:1, fillRule:"evenodd", stroke:"none"}}
                    />
                    <path
                        d="m 69.425652,643.25316 26.86165,0 0,4.33487 -26.86165,0 0,-4.33487 z"
                        style={{fill:"#808080", fillOpacity:1, fillRule:"evenodd", stroke:"none"}}
                    />
                    <path
                        d="m 65.600852,752.13792 34.512138,0 0,12.71528 -34.512138,0 0,-12.71528 z"
                        style={{fill:"#b2b2b2", fillOpacity:1, fillRule:"evenodd", stroke:"none"}}
                    />
                    <path
                        d="m 66.476315,753.0886 32.760312,0 0,10.8157 -32.760312,0 0,-10.8157 z"
                        style={{fill:"#cccccc", fillOpacity:1, fillRule:"evenodd", stroke:"none"}}
                    />
                    <path
                        d="m 67.44689,753.99016 30.820487,0 0,9.01124 -30.820487,0 0,-9.01124 z"
                        style={{fill:"#808080", fillOpacity:1, fillRule:"evenodd", stroke:"none"}}
                    />
                    <g transform="matrix(4.4237819,0,0,-4.4237819,-605.00291,1174.79)">
                        <path
                            d="m 152.2602,94.8971 6.4624,0 0,-1.5871 -6.4624,0 0,1.5871 z"
                            style={{fill:"url(#linearGradient3108)", fillOpacity:1, fillRule:"evenodd", stroke:"none"}}
                        />
                    </g>
                </g>
            </g>
        )
    }
}

export { AutomaticBoiler }

AutomaticBoiler.propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
};

AutomaticBoiler.defaultProps = {
    left: 0,
    top: 0,
};